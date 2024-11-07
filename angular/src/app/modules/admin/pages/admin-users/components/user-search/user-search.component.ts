import { Component } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {

  searchQuery: string = ''; 
  users = [
    { id: 1, name: 'Juan Pérez', avatarUrl: 'https://picsum.photos/200/200?random=1' },
    { id: 2, name: 'María González', avatarUrl: 'https://picsum.photos/200/200?random=2' },
    { id: 3, name: 'Carlos López', avatarUrl: 'https://picsum.photos/200/200?random=3' },
    { id: 4, name: 'Laura Martínez', avatarUrl: 'https://picsum.photos/200/200?random=4' }
  ];
  filteredUsers: any[] = []; 
  selectedUsers: any[] = []; 

  // Método de búsqueda
  searchUsers() {
    if (this.searchQuery.trim()) {  
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredUsers = []; // No mostrar usuarios si no hay búsqueda
    }
  }

  selectUser(user: any) {
    if (!this.selectedUsers.includes(user)) { 
      this.selectedUsers.push(user);          
    }
    this.searchQuery = ''; 
    this.filteredUsers = [];
  }

  // Deseleccionar un usuario
  deselectUser(user: any) {
    this.selectedUsers = this.selectedUsers.filter(u => u !== user); // Eliminar de la lista de seleccionados
  }

  isSelected(user: any): boolean {
    return this.selectedUsers.includes(user);
  }
}
