import Swal from "sweetalert2";

const alerts = (position, toast, showConfirmButton, icon, mensaje) => {
  const Toast = Swal.mixin({
    toast: toast,
    position: position,
    showConfirmButton: showConfirmButton,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: mensaje,
  });
};

export default alerts;
