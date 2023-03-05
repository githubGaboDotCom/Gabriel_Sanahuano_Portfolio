import Swal from 'sweetalert2';
// import '@sweetalert2/theme-borderless';

function AudioPromptMessage () {

    Swal.fire({
        title: 'Enable audio',
        text: "This presentation contains audio, would you like to enable it?",
        icon: 'question',
        iconColor: 'rgb(40, 167, 69)',
        showCancelButton: true,
        confirmButtonText: 'Yes, please!',
        color: '#fff',
        background: 'rgba(54, 70, 93, 0.99)',
        cancelButtonText: 'No, thanks!',
        confirmButtonColor: 'rgb(40, 167, 69)',
        allowOutsideClick: false,
        reverseButtons: true
    }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Enabled!',
                    text: 'Thank you for visiting my portfolio, I hope you can have the best experience! 😃',
                    icon: 'success',
                    color: '#fff',
                    background: 'rgba(54, 70, 93, 0.99)',
                    allowOutsideClick: false 
                })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: 'Audio disabled',
                    text: 'Thank you for visiting my portfolio, I hope you can have the best experience! 🙂',
                    icon: 'info',
                    color: '#fff',
                    background: 'rgba(54, 70, 93, 0.99)',
                    allowOutsideClick: false 
                })
            }})
            
    return null;
}

export default AudioPromptMessage;