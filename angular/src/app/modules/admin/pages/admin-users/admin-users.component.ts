import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent {
  searchText: string = ''; 
  filteredUsers: any[] = []; 
  showConfirmationMessage: boolean = false;

  // Estado de si "Todos los permisos" está seleccionado
  allPermissionsSelected: boolean = false;

  // Objeto que almacena el estado de apertura de cada fila
  isOpen: { [key: string]: boolean } = {
    'competition': false,
    'partidos': false,
    'scouting': false,
    'diseño': false,
    'jugadores': false,
    'test': false,
    'fichas': false,
    'riesgo': false,
    'rdf': false,

  };

  // Objeto para almacenar el estado de los permisos
  permissions: { [key: string]: any } = {
    'club': { create: false },
    'team': { create: false },
    'competition': { create: false, read: false, delete: false },
    'matches': { create: false, read: false, delete: false },
    'scouting': { create: false, read: false, delete: false },
    'design': { create: false, read: false, delete: false },
    'sessions': { create: false, read: false, delete: false },
    'players': { create: false, read: false, delete: false },
    'test': { create: false, read: false, delete: false },
    'files': { create: false, read: false, delete: false },
    'risk': { create: false, read: false, delete: false },
    'rfd': { create: false, read: false, delete: false }

  };

  constructor() { }

  // Método para alternar el estado de visibilidad de las filas
  toggleRow(row: string): void {
    this.isOpen[row] = !this.isOpen[row];  // Cambia el estado de la fila
  }

  // Método para evitar la propagación del evento en los checkboxes
  preventClickPropagation(event: Event): void {
    event.stopPropagation();
  }

  // Método para seleccionar o deseleccionar todas las casillas de verificación
  toggleAllPermissions(): void {
    this.allPermissionsSelected = !this.allPermissionsSelected;

    // Actualiza el estado de cada permiso
    for (let key in this.permissions) {
      for (let perm in this.permissions[key]) {
        this.permissions[key][perm] = this.allPermissionsSelected;
      }
    }
  }

  // Método para contar las checkboxes dentro de una fila
  getCheckboxCount(row: string): number {
    const checkboxCounts: { [key: string]: number } = {
      'club': 1,
      'team': 1,
      'competition': 3,
      'matches': 3,
      'scouting': 3,
      'design': 3,
      'sessions': 3,
      'players': 3,
      'test': 3,
      'files': 3,
      'risk': 3,
      'rfd': 3,
    };

    return checkboxCounts[row] || 0;
  }
  grantPermissions() {
    this.showConfirmationMessage = true;

    // Ocultar el mensaje después de x segundos
    setTimeout(() => {
      this.showConfirmationMessage = false;
    }, 3000);
  }
}
