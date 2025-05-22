window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").classList.add("visible");
    document.body.style.overflow = "auto"; // habilitar scroll
  }, 2000);
});

//dialogo para el apartado de experiencia
// Obtener el diálogo
const dialogoTag = document.getElementById("DialogoTag");


document.getElementById("dialogoClinicaSanAntonio").addEventListener("click", () => {
  Dialogo("Clínica San Antonio", "Migración de un sistema de gestión de pacientes anteriormente en windows forms a una aplicación de electrón js.", "Agua Prieta, Sonora", "Tecnologias: Node.js, Electron, SQL Server, Bootstrap, Tedious, HTML,CSS, JS");
});

document.getElementById("dialogoSaludDental").addEventListener("click", () => {
  Dialogo("Clínica Salud dental", "Implementación de una aplicación web para el control de citas, inventarios y gestión de pacientes y doctores.","Agua Prieta, Sonora","Tecnologías: PHP, MySQL, HTML, CSS, JavaScript, Bootstrap");
});

document.getElementById("dialogoBustamante").addEventListener("click", () => {
  Dialogo("Bustamante Framing LLC", "Aplicación web para el control de empleados, horas trabajadas, gestión de proyectos, ingresos y gastos.", "Sierra Vista, Arizona", "Tecnologías: PHP, MySQL, HTML, CSS, JavaScript, Bootstrap,phpdesktop");
});

document.getElementById("dialogoPrestame").addEventListener("click", () => {
  Dialogo("PrestaMe", "sistema para el control de préstamos, clientes, empleados, generación de reportes, ingresos y gastos.", "Agua Prieta, Sonora","Tecnologías: PHP, MySQL, Laravel, Vue, JWT");
});



function Dialogo(tituloP, descripcionP, lugarP, tecnologiasP) {
  let titulo = document.getElementById("tituloDialogo");
  let descripcion = document.getElementById("descripcionDialogo");
  let lugar = document.getElementById("lugarDialogo");
  let tecnologiasDialogo = document.getElementById("tecnologiasDialogo");
  
  titulo.textContent = tituloP; 
  descripcion.textContent = descripcionP;
  lugar.textContent=lugarP;
  tecnologiasDialogo.textContent=tecnologiasP;

  dialogoTag.showModal();
}



// Cerrar al hacer clic fuera del contenido del diálogo
  dialogoTag.addEventListener('click', (event) => {
    // Si el clic es directamente en el diálogo (fuera del contenido)
    if (event.target === dialogoTag) {
      dialogoTag.close();
    }
  });