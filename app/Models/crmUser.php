<?php

namespace App\Models;


use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use LaravelAndVueJS\Traits\LaravelPermissionToVueJS;


class crmUser extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles, HasApiTokens, LaravelPermissionToVueJS;

    protected $guard_name = 'sanctum'; // or whatever guard you want to use
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
        'role_name',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    //protected $appends = ['role_names'];


    // public function getRoleNamesAttribute()
    // {
    //     $roleNames = $this->getRoleNames()->toArray();
    //     return $roleNames ? implode(',', $roleNames) : '';
    // }
    public function getAllPermissionsAttribute() {
        $permissions = [];
          foreach (Permission::all() as $permission) {
            if (Auth::user()->can($permission->name)) {
              $permissions[] = $permission->name;
            }
          }
          return $permissions;
      }


      
      public function getAllRolesAttribute() {
        $roles = [];
          foreach (Role::all() as $role) {
            if (Auth::user()->role($role->name)) {
              $roles[] = $role->name;
            }
          }
          return $roles;
      }
      
}