import Swal from 'sweetalert2';
import '@sweetalert2/theme-borderless';

function AudioPromptMessage () {
      
    Swal.fire({
        title: 'Enable audio',
        text: "This presentation contains audio, would you like to enable it?",
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes, please!',
        cancelButtonText: 'No, thanks!',
        confirmButtonColor: 'rgb(40, 167, 69)',
        reverseButtons: true
    }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Enabled!',
                'Thank you for visiting my portfolio, I hope you can have the best experience! 😃',
                'success')
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                'Audio disabled',
                'Thank you for visiting my portfolio, I hope you can have the best experience! 🙂',
                'info')
            }})
            
    return null;
}

export default AudioPromptMessage;