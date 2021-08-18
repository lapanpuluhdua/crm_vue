import { map, pick, find } from 'lodash'

export default class Spatie {
    constructor (user, roles, permissions) {
        if (!user) {
            this.id = null
            this.permissions = []
            this.roles = []

            return
        }

        this.id = user.id
        this.roles = roles
        this.permissions = permissions
    }

    can(permissionName) {
        // return this.permissions.indexOf(permissionName) !== -1;
        permissionName = typeof permissionName === 'string' ? Array.from(arguments) : permissionName

        return permissionName.some(r=> this.permissions.indexOf(r) >= 0)
    }
    role(roleName) {
        // return this.roles.indexOf(roleName) !== -1;
        roleName = typeof roleName === 'string' ? Array.from(arguments) : roleName;

        return roleName.some(r=> this.roles.indexOf(r) >= 0);
    }
}