import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import { SvgIcon } from '@mui/material';

/* eslint-disable no-inline-comments */
export const items = [  
  {
    title: 'Panel de Control',
    path: '/dashboard',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Salones de clases',
    path: '/classrooms',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Cursos',
    path: '/courses',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Profesores',
    path: '/teachers',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Estudiantes',
    path: '/student',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Calificaciones',
    path: '/qualifications',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
  
  
];

export const itemsAdmin = [  
  {
    title: 'Panel de Control',
    path: '/dashboard',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },{
    title: 'Permisos Administrador',
    path: '/accessadmin',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },  {
    title: 'Descargables',
    path: '/descargables',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Aportes',
    path: '/aportes',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Unidades',
    path: '/unities',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Programas de Cursos',
    path: '/programs',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Salones de clases',
    path: '/classrooms',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  
  
  {
    title: 'Programas de Cursos MO',
    path: '/coursesMoveOnAdmin',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Cursos',
    path: '/courses',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Profesores MO',
    path: '/teachersMoveOnAdmin',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Profesores',
    path: '/teachers',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Estudiantes',
    path: '/student',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Calificaciones',
    path: '/qualifications',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Pagos',
    path: '/payments',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Chatbot',
    path: '/chatbot',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  }
];



export const itemsTeacher = [
  {
    title: 'Calificaciones',
    path: '/qualifications',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Consultar Programas',
    path: '/teacherDashboard',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },{
    title: 'Estudiantes',
    path: '/student',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
  {//no descargables
    title: 'Aportes',
    path: '/verAportes',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  }, 
    
  {//si descargables
    title: 'Descargables',
    path: '/verDescargables',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  }
];

//incluir Pagos
export const itemsStudent = [
  
  {
    title: 'Panel de Control',
    path: '/studentDashboard',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },    
  {
    title: 'Estudiantes Calificaciones',
    path: '/studentQualifications',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
  
  {
    title: 'Pagos',
    path: '/payments',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  }
];


export const itemsManagers = [
 {
    title: 'Cursos',
    path: '/courses',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  
  {
    title: 'Estudiantes',
    path: '/student',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Programas de Cursos',
    path: '/programs',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Permiso de Profesores',
    path: '/access',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },  
  {
    title: 'Support Permissions',
    path: '/access',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },    
  {
    title: 'Administration Permission',
    path: '/access',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },  
];




export const itemsAfterSchool = [
  
  
  {
    title: 'Permiso de Profesores',
    path: '/access',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },  
  {
    title: 'Salones de clases',
    path: '/classrooms',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  
  {
    title: 'Cursos',
    path: '/courses',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Estudiantes',
    path: '/student',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  
  
  {
    title: 'Programas de Cursos',
    path: '/programs',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },   
  {
    title: 'Panel de Control',
    path: '/dashboardMoveOnSchool',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
];

export const itemsSupport = [ 
    
  {
    title: 'Administration Permission',
    path: '/access',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },  
    
  {
    title: 'Panel de Control',
    path: '/dashboardMoveOnSchool',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Estudiantes',
    path: '/student',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },  {
    title: 'Permiso de Profesores',
    path: '/access',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },//ver solo       
  {
    title: 'Estudiantes Calificaciones',
    path: '/studentQualifications',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  }, 
  {
    title: 'Programas de Cursos',
    path: '/programs',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Cursos',
    path: '/courses',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
];

export const itemsMoveOnSchool = [
 
  
  {
    title: 'Agregar Profesores',//cambiar lenguages por grados
    path: '/teachersMoveOn',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  
  {
    title: 'Agregar Estudiantes',
    path: '/studentMoveOn',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  
  
  {//debe ver todos los programas asignados por casa matriz en vez de 
    title: 'Agregar Cursos',
    path: '/coursesMoveOn',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  
   
  {//no descargables
    title: 'Aportes',
    path: '/verAportes',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  }, 
    
  {//si descargables
    title: 'Descargables',
    path: '/verDescargables',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  }
];


export const itemsTeacherMoveOn = [
 
    
    {
      title: 'Consultar Programas',
      path: '/teacherDasboardMoveOn',
      icon: (
        <SvgIcon fontSize="small">
          <UserIcon />
        </SvgIcon>
      )
    },
    
    
];


export const itemsRegular = [
 
  
];
