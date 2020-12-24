import Vue from 'vue';
import Router from 'vue-router';
import Person from './components/Person.vue';
import Ping from './components/Ping.vue';
import HelloWorld from './components/HelloWorld.vue'
import PersonForm from './components/PersonForm.vue';
import Curso from './components/Curso.vue';
import CursoForm from './components/CursoForm.vue';
import Estudiante from './components/Estudiante.vue';
import EstudianteForm from './components/EstudianteForm.vue';
import DocenteHome from './components/DocenteHome.vue';
import AlumnoHome from './components/AlumnoHome.vue';
import Docente from './components/Docente.vue';
import DocenteForm from './components/DocenteForm.vue';
import Recurso from './components/Recurso.vue';
import RecursoForm from './components/RecursoForm.vue';
import Inscripcion from './components/Inscripcion.vue';
import InscripcionForm from './components/InscripcionForm.vue';
import Periodo from './components/Periodo.vue';
import PeriodoForm from './components/PeriodoForm.vue';
import PlanAcademico from './components/PlanAcademico.vue';
import PlanAcademicoForm from './components/PlanAcademicoForm.vue';
import RolPersona from './components/RolPersona.vue';
import RolPersonaForm from './components/RolPersonaForm.vue';
import Rol from './components/Rol.vue';
import RolForm from './components/RolForm.vue';
import Seccion from './components/Seccion.vue';
import SeccionForm from './components/SeccionForm.vue';
import Secuencia from './components/Secuencia.vue';
import SecuenciaForm from './components/SecuenciaForm.vue';
import Sesion from './components/Sesion.vue';
import SesionForm from './components/SesionForm.vue';
import SesionHome from './components/SesionHome.vue';
import SesionAlumno from './components/SesionAlumno.vue';
import TipoRecurso from './components/TipoRecurso.vue';
import TipoRecursoForm from './components/TipoRecursoForm.vue';
import Trabajo from './components/Trabajo.vue';
import TrabajoForm from './components/TrabajoForm.vue';
import Unidad from './components/Unidad.vue';
import UnidadForm from './components/UnidadForm.vue';


import Login from './components/Login.vue';
import Logout from './components/Logout.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/docentehome',
      name: 'DocenteHome',
      component: DocenteHome
    },
    {
      path: '/alumnohome',
      name: 'AlumnoHome',
      component: AlumnoHome
    },
    {
      path: '/sesionhome',
      name: 'SesionHome',
      component: SesionHome
    },
    {
      path: '/sesionalumno',
      name: 'SesionAlumno',
      component: SesionAlumno
    },
    {
      path: '/persons',
      name: 'Person',
      component: Person,
    },
    {
      path: '/persons/form',
      name: 'PersonForm',
      component: PersonForm,
    },
    {
      path: '/persons/form/:id',
      name: 'PersonForme',
      component: PersonForm
    },
    {
      path: '/curso',
      name: 'Curso',
      component: Curso,
    },
    {
      path: '/curso/form',
      name: 'CursoForm',
      component: CursoForm,
    },
    {
      path: '/curso/form/:id',
      name: 'CursoForme',
      component: CursoForm
    },
    {
      path: '/estudiante',
      name: 'Estudiante',
      component: Estudiante,
    },
    {
      path: '/estudiante/form',
      name: 'EstudianteForm',
      component: EstudianteForm,
    },
    {
      path: '/estudiante/form/:id',
      name: 'EstudianteForme',
      component: EstudianteForm
    },
    {
      path: '/docente',
      name: 'Docente',
      component: Docente,
    },
    {
      path: '/docente/form',
      name: 'DocenteForm',
      component: DocenteForm,
    },
    {
      path: '/docente/form/:id',
      name: 'DocenteForme',
      component: DocenteForm
    },
    {
      path: '/recurso',
      name: 'Recurso',
      component: Recurso,
    },
    {
      path: '/recurso/form',
      name: 'RecursoForm',
      component: RecursoForm,
    },
    {
      path: '/recurso/form/:id',
      name: 'RecursoForme',
      component: RecursoForm
    },
    {
      path: '/inscripcion',
      name: 'Inscripcion',
      component: Inscripcion,
    },
    {
      path: '/inscripcion/form',
      name: 'InscripcionForm',
      component: InscripcionForm,
    },
    {
      path: '/inscripcion/form/:id',
      name: 'InscripcionForme',
      component: InscripcionForm
    },
    {
      path: '/periodo',
      name: 'Periodo',
      component: Periodo,
    },
    {
      path: '/periodo/form',
      name: 'PeriodoForm',
      component: PeriodoForm,
    },
    {
      path: '/periodo/form/:id',
      name: 'PeriodoForme',
      component: PeriodoForm
    },
    {
      path: '/plan',
      name: 'PlanAcademico',
      component: PlanAcademico,
    },
    {
      path: '/plan/form',
      name: 'PlanAcademicoForm',
      component: PlanAcademicoForm,
    },
    {
      path: '/plan/form/:id',
      name: 'PlanAcademicoForme',
      component: PlanAcademicoForm
    },
    {
      path: '/rolPersona',
      name: 'RolPersona',
      component: RolPersona,
    },
    {
      path: '/rolPersona/form',
      name: 'RolPersonaForm',
      component: RolPersonaForm,
    },
    {
      path: '/rolPersona/form/:id',
      name: 'RolPersonaForme',
      component: RolPersonaForm
    },
    {
      path: '/rol',
      name: 'Rol',
      component: Rol,
    },
    {
      path: '/rol/form',
      name: 'RolForm',
      component: RolForm,
    },
    {
      path: '/rol/form/:id',
      name: 'RolForme',
      component: RolForm
    },
    {
      path: '/seccion',
      name: 'Seccion',
      component: Seccion,
    },
    {
      path: '/seccion/form',
      name: 'SeccionForm',
      component: SeccionForm,
    },
    {
      path: '/seccion/form/:id',
      name: 'SeccionForme',
      component: SeccionForm
    },
    {
      path: '/secuencia',
      name: 'Secuencia',
      component: Secuencia,
    },
    {
      path: '/secuencia/form',
      name: 'SecuenciaForm',
      component: SecuenciaForm,
    },
    {
      path: '/secuencia/form/:id',
      name: 'SecuenciaForme',
      component: SecuenciaForm
    },
    {
      path: '/sesion',
      name: 'Sesion',
      component: Sesion,
    },
    {
      path: '/sesion/form',
      name: 'SesionForm',
      component: SesionForm,
    },
    {
      path: '/sesion/form/:id',
      name: 'SesionForme',
      component: SesionForm
    },
    {
      path: '/tipoRecurso',
      name: 'TipoRecurso',
      component: TipoRecurso,
    },
    {
      path: '/tipoRecurso/form',
      name: 'TipoRecursoForm',
      component: TipoRecursoForm,
    },
    {
      path: '/tipoRecurso/form/:id',
      name: 'TipoRecursoForme',
      component: TipoRecursoForm
    },
    {
      path: '/trabajo',
      name: 'Trabajo',
      component: Trabajo,
    },
    {
      path: '/trabajo/form',
      name: 'TrabajoForm',
      component: TrabajoForm,
    },
    {
      path: '/trabajo/form/:id',
      name: 'TrabajoForme',
      component: TrabajoForm
    },
    {
      path: '/unidad',
      name: 'Unidad',
      component: Unidad,
    },
    {
      path: '/unidad/form',
      name: 'UnidadForm',
      component: UnidadForm,
    },
    {
      path: '/unidad/form/:id',
      name: 'UnidadForme',
      component: UnidadForm
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },

  ],
});

let whiteRoutes = [
  "LoginForm",
  "HelloWorld",
  "Ping",
  "AlumnoHome"
]

router.beforeEach((to, from, next) => {
  console.log(`${from.path} to ${to.path}`);
  let isAuthenticated = false;
  if (localStorage.getItem('user') != null) {
    isAuthenticated = true;
  }
  // if (to.name !== 'LoginForm' && to.name !== 'HelloWorld' && to.name !== 'Ping' && !isAuthenticated) {
  if (!whiteRoutes.includes(to.name) && !isAuthenticated) {
    next({ name: 'LoginForm' });
  } else {
    next();
  }
});
//https://www.digitalocean.com/community/tutorials/vuejs-advanced-vue-routing
export default router
