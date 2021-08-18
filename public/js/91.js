(self.webpackChunk=self.webpackChunk||[]).push([[91],{5541:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var r=a(7757),s=a.n(r);function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e,a,r,s,n,o){try{var i=t[n](o),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(r,s)}const l={data:function(){return{isDeleting:!1}},methods:{deleteTag:function(){var t,e=this;return(t=s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isDeleting=!0,t.next=3,e.callApi("delete",e.getDeleteModalObj.deleteUrl,e.getDeleteModalObj.data);case 3:200===t.sent.status?(e.s(e.getDeleteModalObj.successMsg),e.$store.commit("setDeleteModal",!0)):(e.swr(),e.$store.commit("setDeleteModal",!1)),e.isDeleting=!1;case 6:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,s){var n=t.apply(e,a);function o(t){i(n,r,s,o,l,"next",t)}function l(t){i(n,r,s,o,l,"throw",t)}o(void 0)}))})()},closeModal:function(){this.$store.commit("setDeleteModal",!1)}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,a(629).Se)(["getDeleteModalObj"]))};const d=(0,a(1900).Z)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{value:t.getDeleteModalObj.showDeleteModal,"mask-closable":!1,closable:!1,width:"360"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"ios-information-circle"}}),t._v(" "),a("span",[t._v("Delete confirmation!")])],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("Are you sure you want to delete this item?")])]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"default",size:"large"},on:{click:t.closeModal}},[t._v("Close")]),t._v(" "),a("Button",{attrs:{type:"error",size:"large",loading:t.isDeleting,disabled:t.isDeleting},on:{click:t.deleteTag}},[t._v("Delete")])],1)])],1)}),[],!1,null,null,null).exports},91:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>p});var r=a(7757),s=a.n(r),n=a(5541),o=a(9101),i=a(629);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e,a,r,s,n,o){try{var i=t[n](o),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(r,s)}function u(t){return function(){var e=this,a=arguments;return new Promise((function(r,s){var n=t.apply(e,a);function o(t){c(n,r,s,o,i,"next",t)}function i(t){c(n,r,s,o,i,"throw",t)}o(void 0)}))}}const v={name:"role",components:{ClipboardIcon:o.Kmg,DeleteModal:n.Z},data:function(){return{data:{id:"",name:"",description:""},roles:[],addModal:!1,isAdding:!1,index:-1}},methods:{clearForm:function(){var t=this;Object.keys(this.data).forEach((function(e){return t.data[e]=""}))},add:function(){var t=this;return u(s().mark((function e(){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.data.name.trim()){e.next=2;break}return e.abrupt("return",t.e("Name is required"));case 2:return e.next=4,t.callApi("post","roles",t.data);case 4:201===(a=e.sent).status?(t.roles.unshift(a.data),t.s("Role has been added successfully!"),t.addModal=!1,t.clearForm()):422==a.status?a.data.errors.name&&t.e(a.data.errors.name[0]):t.swr();case 6:case"end":return e.stop()}}),e)})))()},edit:function(t,e){var a=this;return u(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.addModal=!0,a.isAdding=!1,r.next=4,a.callApi("get","roles/"+t.id);case 4:200==(n=r.sent).status?(a.data=n.data,a.addModal=!0,a.index=e):422==n.status?n.data.errors.name&&a.e(n.data.errors.name[0]):a.swr();case 6:case"end":return r.stop()}}),r)})))()},update:function(){var t=this;return u(s().mark((function e(){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.callApi("put","roles/"+t.data.id,t.data);case 2:200==(a=e.sent).status?(t.roles[t.index]=a.data,t.s("Role has been edited successfully!"),t.addModal=!1,t.clearForm()):422==a.status?a.data.errors.name&&t.e(a.data.errors.name[0]):t.swr();case 4:case"end":return e.stop()}}),e)})))()},showDeletingModal:function(t,e){var a={showDeleteModal:!0,deleteUrl:"roles/"+t.id,data:t,deletingIndex:e,isDeleted:!1};this.$store.commit("setDeletingModalObj",a),console.log("delete method called")}},created:function(){var t=this;return u(s().mark((function e(){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.callApi("get","roles");case 2:a=e.sent,console.log("res",a),200==a.status?t.roles=a.data:t.swr();case 5:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,i.Se)(["getDeleteModalObj"])),watch:{getDeleteModalObj:function(t){t.isDeleted&&this.roles.splice(t.deletingIndex,1)}}};const p=(0,a(1900).Z)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid pd-x-0"},[a("div",{staticClass:"d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30"},[a("div",[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb breadcrumb-style1 mg-b-10"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Role")])])])])]),t._v(" "),a("div",{},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("b",[t._v(" LIST ROLE ")]),t._v(" "),a("a",{staticClass:"btn btn-info btn-xs float-right",attrs:{href:"#","data-toggle":"modal"},on:{click:function(){t.addModal=!0,t.isAdding=!0,t.clearForm()}}},[a("i",{staticClass:"fa fa-plus"}),t._v(" Add New Role\n        ")])]),t._v(" "),a("div",{staticClass:"card-body pd-lg-25"},[a("div",{staticClass:"table table-bordered table-striped m-0 responsive"},[a("table",{staticClass:"table products-table"},[t._m(0),t._v(" "),a("tbody",t._l(t.roles,(function(e,r){return t.roles.length?a("tr",{key:r},[a("td",[t._v(t._s(t.key=r+1))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.description))]),t._v(" "),a("td",[t._v(t._s(t._f("formatDate")(e.created_at)))]),t._v(" "),a("td",[a("div",{staticClass:"dropdown custom-dropdown"},[a("button",{staticClass:"btn btn-primary dropdown-toggle btn-sm",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                      Options\n                    ")]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("button",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal"},on:{click:function(a){return t.edit(e,r)}}},[a("i",{staticClass:"fa fa-edit"}),t._v("  Update")]),t._v(" "),a("button",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal"},on:{click:function(a){return t.showDeletingModal(e,r)}}},[a("i",{staticClass:"fa fa-trash"}),t._v("  Remove")])])])])]):t._e()})),0)])])])])]),t._v(" "),a("Modal",{attrs:{title:"Roles Form","mask-closable":!0,closable:!0,width:"800px"},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"media align-items-center"},[a("span",{staticClass:"tx-color-03 d-none d-sm-block"},[a("ClipboardIcon")],1),t._v(" "),a("div",{staticClass:"media-body mg-sm-l-20"},[a("h4",{staticClass:"tx-18 tx-sm-20 mg-b-2"},[t._v("Role Form")])])])]),t._v(" "),a("div",{staticClass:"alert alert-danger alert-dismissible mg-b-20 fade show",attrs:{role:"alert"}},[a("strong",[t._v("Reminder!")]),t._v(" All fields must be filled in.\n    ")]),t._v(" "),a("div",{staticClass:"pd-sm-20",attrs:{slot:""},slot:"default"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("p",[a("b",[t._v(" Name"),a("span",{staticClass:"text-danger"},[t._v("*")])])])])]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Full Name"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("p",[a("b",[t._v(" Description"),a("span",{staticClass:"text-danger"},[t._v("*")])])])])]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.description,expression:"data.description"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"About the role..."},domProps:{value:t.data.description},on:{input:function(e){e.target.composing||t.$set(t.data,"description",e.target.value)}}})])])])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.id,expression:"data.id"}],attrs:{type:"hidden",name:"id"},domProps:{value:t.data.id},on:{input:function(e){e.target.composing||t.$set(t.data,"id",e.target.value)}}}),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"btn btn-dark",on:{click:function(e){t.addModal=!1}}},[t._v("Close")]),t._v(" "),t.isAdding?a("button",{staticClass:"btn btn-info",on:{click:t.add}},[t._v("Add Role")]):a("button",{staticClass:"btn btn-info",on:{click:t.update}},[t._v("Update Role")])])]),t._v(" "),a("DeleteModal")],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Created At")]),t._v(" "),a("th",[t._v("Action")])])])}],!1,null,null,null).exports}}]);