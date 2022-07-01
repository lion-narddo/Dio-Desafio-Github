function getAdmins(map){
    let admins = [];

    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'User');
usuarios.set('Leo', 'Admin');
usuarios.set('Eduardo', 'Admin');
usuarios.set('Iggy', 'Admin');

console.log(getAdmins(usuarios));