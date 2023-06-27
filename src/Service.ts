import { SyntheticEvent } from "react";

export const floatedLabel = (formRef:any) => {
   const formData =  formRef?.current,
   formControl = formData.querySelectorAll('.form-control');
   for (let i = 0, leng = formControl.length; i < leng; i++) 
   formControl[i].addEventListener('input', ()=> {
      const formGroup = formControl[i].closest('.form-group');
      if(!(formControl[i].value).trim()) formGroup.classList.remove('input-not-empty');
      else formGroup.classList.add('input-not-empty');
   });
}

export const onSubmitBooking = ({setLoader, setRandomUUID}:any , event:SyntheticEvent)=> {
   event.preventDefault();
   setLoader(true);
   let isValid = true;
   const formData:any= {}, 
   randomUUID = self.crypto.randomUUID(),
   formControl = (event.target as HTMLFormElement).querySelectorAll('.form-control');
   
   for (let i = 0, leng = formControl.length; i < leng; i++) {
      const formValue:any  = (formControl[i] as HTMLFormElement)
      if(!(formValue.value).trim()) {
         isValid = false;
         formValue.style.borderColor = "red";
         break;
      }
      formData[formValue['name']] = formValue.value;
   }
   if(isValid) {
      setRandomUUID(randomUUID);
      const dataUrl = (document.querySelector('#booking canvas') as HTMLCanvasElement).toDataURL(),
      windowContent =`<!DOCTYPE html><html><head><title>Print canvas</title></head><body>
      <img src="${dataUrl}"><br/> <h2>${formData['fullname']}</h2></body></html>`,
      printWin:any = window.open('','','width=340,height=260');

      printWin.document.open();
      printWin.document.write(windowContent);
      printWin.document.close();
      printWin.focus();
      printWin.print();
      printWin.close();
      (event.target as HTMLFormElement).reset();
   }


   setLoader(false);
}
