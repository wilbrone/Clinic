webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-icon{\n    font-size:48px !important;\n    height:48px !important;\n    width: 48px !important;\n}\n\n.my-content{\n\tmin-height: 750px\n}\n\nmat-sidenav{\n\n\tmin-width: 204px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n  \n  <mat-toolbar color=\"primary\">\n    <button  mat-button (click)=\"sidenav.toggle()\">\n      <mat-icon >menu</mat-icon>\n    </button>\n    <span>HealthBook</span>\n  </mat-toolbar>\n  <mat-sidenav color=\"primary\" #sidenav mode=\"side\">\n    \n    <app-nav-bar></app-nav-bar>\n\n  </mat-sidenav>\n  <div class=\"my-content\">\n    <div class=\"toolbar-placeholder-fix\"></div>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_charts_charts_component__ = __webpack_require__("../../../../../src/app/component/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_chat_chat_component__ = __webpack_require__("../../../../../src/app/component/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_home_home_component__ = __webpack_require__("../../../../../src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/component/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/component/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__covalent_http__ = __webpack_require__("../../../../@covalent/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_sort__ = __webpack_require__("../../../material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_cdk_observers__ = __webpack_require__("../../../cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_cdk_stepper__ = __webpack_require__("../../../cdk/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__component_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/component/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__component_appointment_appointment_component__ = __webpack_require__("../../../../../src/app/component/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__component_medications_medications_component__ = __webpack_require__("../../../../../src/app/component/medications/medications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__component_summary_summary_component__ = __webpack_require__("../../../../../src/app/component/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__component_calendar_utils_calendar_utils_component__ = __webpack_require__("../../../../../src/app/component/calendar-utils/calendar-utils.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__component_calendar_utils_module__ = __webpack_require__("../../../../../src/app/component/calendar-utils/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__component_payment_payment_component__ = __webpack_require__("../../../../../src/app/component/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__component_system_review_lungs_lungs_component__ = __webpack_require__("../../../../../src/app/component/system-review/lungs/lungs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__component_system_review_knee_knee_component__ = __webpack_require__("../../../../../src/app/component/system-review/knee/knee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__component_system_review_kidneys_kidneys_component__ = __webpack_require__("../../../../../src/app/component/system-review/kidneys/kidneys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__component_system_review_stomach_stomach_component__ = __webpack_require__("../../../../../src/app/component/system-review/stomach/stomach.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__component_system_review_x_ray_x_ray_component__ = __webpack_require__("../../../../../src/app/component/system-review/x-ray/x-ray.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__component_system_review_heart_heart_component__ = __webpack_require__("../../../../../src/app/component/system-review/heart/heart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__component_system_review_brain_brain_component__ = __webpack_require__("../../../../../src/app/component/system-review/brain/brain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__component_system_review_brain_new_brain_component__ = __webpack_require__("../../../../../src/app/component/system-review/brain/new-brain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__component_system_review_kidneys_new_kidneys_component__ = __webpack_require__("../../../../../src/app/component/system-review/kidneys/new-kidneys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__component_system_review_lungs_new_lungs_component__ = __webpack_require__("../../../../../src/app/component/system-review/lungs/new-lungs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__component_system_review_knee_new_knee_component__ = __webpack_require__("../../../../../src/app/component/system-review/knee/new-knee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__component_system_review_heart_new_heart_component__ = __webpack_require__("../../../../../src/app/component/system-review/heart/new-heart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__component_system_review_stomach_new_stomach_component__ = __webpack_require__("../../../../../src/app/component/system-review/stomach/new-stomach.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__component_system_review_x_ray_new_x_ray_component__ = __webpack_require__("../../../../../src/app/component/system-review/x-ray/new-x-ray.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__component_tasks_new_task_component__ = __webpack_require__("../../../../../src/app/component/tasks/new-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__component_patients_patients_component__ = __webpack_require__("../../../../../src/app/component/patients/patients.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_charts_charts_component__["a" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_50__component_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_51__component_appointment_appointment_component__["a" /* AppointmentComponent */],
                __WEBPACK_IMPORTED_MODULE_53__component_medications_medications_component__["a" /* MedicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_54__component_summary_summary_component__["a" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_52__component_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_55__component_calendar_utils_calendar_utils_component__["a" /* CalendarUtilsComponent */],
                __WEBPACK_IMPORTED_MODULE_57__component_payment_payment_component__["a" /* PaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_58__component_system_review_lungs_lungs_component__["a" /* LungsComponent */],
                __WEBPACK_IMPORTED_MODULE_59__component_system_review_knee_knee_component__["a" /* KneeComponent */],
                __WEBPACK_IMPORTED_MODULE_60__component_system_review_kidneys_kidneys_component__["a" /* KidneysComponent */],
                __WEBPACK_IMPORTED_MODULE_61__component_system_review_stomach_stomach_component__["a" /* StomachComponent */],
                __WEBPACK_IMPORTED_MODULE_62__component_system_review_x_ray_x_ray_component__["a" /* XRayComponent */],
                __WEBPACK_IMPORTED_MODULE_63__component_system_review_heart_heart_component__["a" /* HeartComponent */],
                __WEBPACK_IMPORTED_MODULE_64__component_system_review_brain_brain_component__["a" /* BrainComponent */],
                __WEBPACK_IMPORTED_MODULE_65__component_system_review_brain_new_brain_component__["a" /* NewBrainComponent */],
                __WEBPACK_IMPORTED_MODULE_66__component_system_review_kidneys_new_kidneys_component__["a" /* NewKidneysComponent */],
                __WEBPACK_IMPORTED_MODULE_67__component_system_review_lungs_new_lungs_component__["a" /* NewLungsComponent */],
                __WEBPACK_IMPORTED_MODULE_68__component_system_review_knee_new_knee_component__["a" /* NewKneeComponent */],
                __WEBPACK_IMPORTED_MODULE_69__component_system_review_heart_new_heart_component__["a" /* NewHeartComponent */],
                __WEBPACK_IMPORTED_MODULE_70__component_system_review_stomach_new_stomach_component__["a" /* NewStomachComponent */],
                __WEBPACK_IMPORTED_MODULE_71__component_system_review_x_ray_new_x_ray_component__["a" /* NewXRayComponent */],
                __WEBPACK_IMPORTED_MODULE_72__component_tasks_new_task_component__["a" /* NewTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_73__component_patients_patients_component__["a" /* PatientsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_56__component_calendar_utils_module__["a" /* DemoUtilsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__covalent_core__["b" /* CovalentLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_13__covalent_core__["e" /* CovalentSearchModule */],
                __WEBPACK_IMPORTED_MODULE_13__covalent_core__["c" /* CovalentMediaModule */],
                __WEBPACK_IMPORTED_MODULE_13__covalent_core__["d" /* CovalentMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__covalent_core__["a" /* CovalentCommonModule */],
                __WEBPACK_IMPORTED_MODULE_14__covalent_http__["a" /* CovalentHttpModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_38__angular_cdk_a11y__["a" /* A11yModule */],
                __WEBPACK_IMPORTED_MODULE_39__angular_cdk_bidi__["a" /* BidiModule */],
                __WEBPACK_IMPORTED_MODULE_40__angular_cdk_observers__["a" /* ObserversModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_cdk_overlay__["d" /* OverlayModule */],
                __WEBPACK_IMPORTED_MODULE_42__angular_cdk_platform__["b" /* PlatformModule */],
                __WEBPACK_IMPORTED_MODULE_43__angular_cdk_portal__["g" /* PortalModule */],
                __WEBPACK_IMPORTED_MODULE_44__angular_cdk_scrolling__["a" /* ScrollDispatchModule */],
                __WEBPACK_IMPORTED_MODULE_45__angular_cdk_stepper__["d" /* CdkStepperModule */],
                __WEBPACK_IMPORTED_MODULE_46__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_chips__["b" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_paginator__["b" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_sort__["b" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_sidenav__["b" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_36__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_47__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_48__angular_platform_browser_animations__["a" /* NoopAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_appointment_appointment_component__ = __webpack_require__("../../../../../src/app/component/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_charts_charts_component__ = __webpack_require__("../../../../../src/app/component/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_chat_chat_component__ = __webpack_require__("../../../../../src/app/component/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_home_home_component__ = __webpack_require__("../../../../../src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_medications_medications_component__ = __webpack_require__("../../../../../src/app/component/medications/medications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_summary_summary_component__ = __webpack_require__("../../../../../src/app/component/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/component/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_payment_payment_component__ = __webpack_require__("../../../../../src/app/component/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_system_review_lungs_lungs_component__ = __webpack_require__("../../../../../src/app/component/system-review/lungs/lungs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_system_review_knee_knee_component__ = __webpack_require__("../../../../../src/app/component/system-review/knee/knee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_system_review_kidneys_kidneys_component__ = __webpack_require__("../../../../../src/app/component/system-review/kidneys/kidneys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_system_review_stomach_stomach_component__ = __webpack_require__("../../../../../src/app/component/system-review/stomach/stomach.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_system_review_x_ray_x_ray_component__ = __webpack_require__("../../../../../src/app/component/system-review/x-ray/x-ray.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_system_review_heart_heart_component__ = __webpack_require__("../../../../../src/app/component/system-review/heart/heart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_system_review_brain_brain_component__ = __webpack_require__("../../../../../src/app/component/system-review/brain/brain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_system_review_brain_new_brain_component__ = __webpack_require__("../../../../../src/app/component/system-review/brain/new-brain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_system_review_kidneys_new_kidneys_component__ = __webpack_require__("../../../../../src/app/component/system-review/kidneys/new-kidneys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_patients_patients_component__ = __webpack_require__("../../../../../src/app/component/patients/patients.component.ts");




















var appRoutes = [
    {
        path: '',
        redirectTo: '/summary',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__component_home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'payment',
        component: __WEBPACK_IMPORTED_MODULE_9__component_payment_payment_component__["a" /* PaymentComponent */],
    },
    {
        path: 'patients',
        component: __WEBPACK_IMPORTED_MODULE_19__component_patients_patients_component__["a" /* PatientsComponent */],
    },
    {
        path: 'charts',
        component: __WEBPACK_IMPORTED_MODULE_2__component_charts_charts_component__["a" /* ChartsComponent */],
    },
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_3__component_chat_chat_component__["a" /* ChatComponent */],
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__component_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'medications',
        component: __WEBPACK_IMPORTED_MODULE_6__component_medications_medications_component__["a" /* MedicationsComponent */],
    },
    {
        path: 'summary',
        component: __WEBPACK_IMPORTED_MODULE_7__component_summary_summary_component__["a" /* SummaryComponent */],
    },
    {
        path: 'tasks',
        component: __WEBPACK_IMPORTED_MODULE_8__component_tasks_tasks_component__["a" /* TasksComponent */],
    },
    {
        path: 'appointment',
        component: __WEBPACK_IMPORTED_MODULE_1__component_appointment_appointment_component__["a" /* AppointmentComponent */],
    },
    {
        path: 'lungs',
        component: __WEBPACK_IMPORTED_MODULE_10__component_system_review_lungs_lungs_component__["a" /* LungsComponent */],
    },
    {
        path: 'knee',
        component: __WEBPACK_IMPORTED_MODULE_11__component_system_review_knee_knee_component__["a" /* KneeComponent */],
    },
    {
        path: 'kidneys',
        component: __WEBPACK_IMPORTED_MODULE_12__component_system_review_kidneys_kidneys_component__["a" /* KidneysComponent */],
    },
    {
        path: 'stomach',
        component: __WEBPACK_IMPORTED_MODULE_13__component_system_review_stomach_stomach_component__["a" /* StomachComponent */],
    },
    {
        path: 'x_ray',
        component: __WEBPACK_IMPORTED_MODULE_14__component_system_review_x_ray_x_ray_component__["a" /* XRayComponent */],
    },
    {
        path: 'heart',
        component: __WEBPACK_IMPORTED_MODULE_15__component_system_review_heart_heart_component__["a" /* HeartComponent */],
    },
    {
        path: 'brain',
        component: __WEBPACK_IMPORTED_MODULE_16__component_system_review_brain_brain_component__["a" /* BrainComponent */],
    },
    {
        path: 'new_brain',
        component: __WEBPACK_IMPORTED_MODULE_17__component_system_review_brain_new_brain_component__["a" /* NewBrainComponent */],
    },
    {
        path: 'new_kidneys',
        component: __WEBPACK_IMPORTED_MODULE_18__component_system_review_kidneys_new_kidneys_component__["a" /* NewKidneysComponent */],
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/component/appointment/appointment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/appointment/appointment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n<div class=\"row\">\n<div class=\"col-md-8\">\n<mat-card>\n\t<div class=\"row text-center\">\n\t  <div class=\"col-md-4\">\n\t    <div class=\"btn-group\">\n\t      <div\n\t        class=\"btn btn-primary\"\n\t        mwlCalendarPreviousView\n\t        [view]=\"view\"\n\t        [(viewDate)]=\"viewDate\"\n\t        (viewDateChange)=\"activeDayIsOpen = false\">\n\t        Previous\n\t      </div>\n\t      <div\n\t        class=\"btn btn-outline-secondary\"\n\t        mwlCalendarToday\n\t        [(viewDate)]=\"viewDate\">\n\t        Today\n\t      </div>\n\t      <div\n\t        class=\"btn btn-primary\"\n\t        mwlCalendarNextView\n\t        [view]=\"view\"\n\t        [(viewDate)]=\"viewDate\"\n\t        (viewDateChange)=\"activeDayIsOpen = false\">\n\t        Next\n\t      </div>\n\t    </div>\n\t  </div>\n\t  <div class=\"col-md-4\">\n\t    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n\t  </div>\n\t  <div class=\"col-md-4\">\n\t    <div class=\"btn-group\">\n\t      <div\n\t        class=\"btn btn-primary\"\n\t        (click)=\"view = 'month'\"\n\t        [class.active]=\"view === 'month'\">\n\t        Month\n\t      </div>\n\t      <div\n\t        class=\"btn btn-primary\"\n\t        (click)=\"view = 'week'\"\n\t        [class.active]=\"view === 'week'\">\n\t        Week\n\t      </div>\n\t      <div\n\t        class=\"btn btn-primary\"\n\t        (click)=\"view = 'day'\"\n\t        [class.active]=\"view === 'day'\">\n\t        Day\n\t      </div>\n\t    </div>\n\t  </div>\n\t</div>\n\t<br>\n\n\t<div [ngSwitch]=\"view\">\n\t\t<mwl-calendar-month-view\n\t\t\t*ngSwitchCase=\"'month'\"\n\t\t\t[viewDate]=\"viewDate\"\n\t\t\t[events]=\"events\"\n\t\t\t[activeDayIsOpen]=\"activeDayIsOpen\">\n\n\t\t</mwl-calendar-month-view>\n\t\t<mwl-calendar-week-view\n\t\t\t*ngSwitchCase=\"'week'\"\n\t\t\t[viewDate]=\"viewDate\"\n\t\t\t[events]=\"events\">\n\t\t</mwl-calendar-week-view>\n\t\t<mwl-calendar-day-view\n\t\t\t*ngSwitchCase=\"'day'\"\n\t\t\t[viewDate]=\"viewDate\"\n\t\t\t[events]=\"events\">\n\t\t</mwl-calendar-day-view>\n\t</div>\n\t</mat-card>\n</div>\n<div class=\"col-md-4\">\n\t<mat-card>\n\t<button\n\t    class=\"btn btn-primary pull-right\"\n\t    (click)=\"addEvent()\">\n\t    Add new\n\t  </button>\n\t<div *ngFor=\"let event of events; let i = index; let last = last\" [ngClass]=\"{ last: last }\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\n\t\t\t  <mat-form-field>\n\t\t\t    <input matInput type=\"text\"\n\t\t          [(ngModel)]=\"event.title\"\n\t\t          (keyup)=\"refresh.next()\">\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-md-6\">\n\t\t\t<br>\n\t\t\t  <mwl-demo-utils-date-time-picker\n\t\t          [(ngModel)]=\"event.start\"\n\t\t          (ngModelChange)=\"refresh.next()\"\n\t\t          placeholder=\"Not set\">\n\t\t        </mwl-demo-utils-date-time-picker><br>\n\n\t\t\t   <mwl-demo-utils-date-time-picker\n\t\t          [(ngModel)]=\"event.end\"\n\t\t          (ngModelChange)=\"refresh.next()\"\n\t\t          placeholder=\"Not set\">\n\t\t        </mwl-demo-utils-date-time-picker>\n\t\t    </div>\n\t   \t</div><br>\n\t</div>\n\t</mat-card>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/appointment/appointment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var AppointmentComponent = (function () {
    function AppointmentComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.events = [
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 1),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    AppointmentComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    AppointmentComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    };
    AppointmentComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
            end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    AppointmentComponent.prototype.ngOnInit = function () {
    };
    AppointmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__("../../../../../src/app/component/appointment/appointment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/appointment/appointment.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], AppointmentComponent);
    return AppointmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/calendar-utils/calendar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarHeaderComponent = (function () {
    function CalendarHeaderComponent() {
        this.locale = 'en';
        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarHeaderComponent.prototype, "view", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Date)
    ], CalendarHeaderComponent.prototype, "viewDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarHeaderComponent.prototype, "locale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CalendarHeaderComponent.prototype, "viewChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CalendarHeaderComponent.prototype, "viewDateChange", void 0);
    CalendarHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-demo-utils-calendar-header',
            template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\">\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\">\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\">\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n  "
        })
    ], CalendarHeaderComponent);
    return CalendarHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/calendar-utils/calendar-utils.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/calendar-utils/calendar-utils.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  calendar-utils works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/calendar-utils/calendar-utils.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarUtilsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarUtilsComponent = (function () {
    function CalendarUtilsComponent() {
    }
    CalendarUtilsComponent.prototype.ngOnInit = function () {
    };
    CalendarUtilsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar-utils',
            template: __webpack_require__("../../../../../src/app/component/calendar-utils/calendar-utils.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/calendar-utils/calendar-utils.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], CalendarUtilsComponent);
    return CalendarUtilsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/calendar-utils/date-time-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DateTimePickerComponent; }),
    multi: true
};
var DateTimePickerComponent = (function () {
    function DateTimePickerComponent(cdr) {
        this.cdr = cdr;
        this.onChangeCallback = function () { };
    }
    DateTimePickerComponent.prototype.writeValue = function (date) {
        this.date = date;
        this.dateStruct = {
            day: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getDate"])(date),
            month: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMonth"])(date) + 1,
            year: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(date)
        };
        this.timeStruct = {
            second: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getSeconds"])(date),
            minute: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMinutes"])(date),
            hour: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getHours"])(date)
        };
        this.cdr.detectChanges();
    };
    DateTimePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DateTimePickerComponent.prototype.registerOnTouched = function (fn) { };
    DateTimePickerComponent.prototype.updateDate = function () {
        var newDate = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setYear"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMonth"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setDate"])(this.date, this.dateStruct.day), this.dateStruct.month - 1), this.dateStruct.year);
        this.onChangeCallback(newDate);
    };
    DateTimePickerComponent.prototype.updateTime = function () {
        var newDate = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setHours"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMinutes"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setSeconds"])(this.date, this.timeStruct.second), this.timeStruct.minute), this.timeStruct.hour);
        this.onChangeCallback(newDate);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DateTimePickerComponent.prototype, "placeholder", void 0);
    DateTimePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-demo-utils-date-time-picker',
            template: "\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            readonly\n            class=\"form-control\"\n            [placeholder]=\"placeholder\"\n            name=\"date\"\n            [(ngModel)]=\"dateStruct\"\n            (ngModelChange)=\"updateDate()\"\n            ngbDatepicker\n            #datePicker=\"ngbDatepicker\">\n            <div class=\"input-group-addon\" (click)=\"datePicker.toggle()\" >\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n        </div>\n      </div>\n    </form>\n    <ngb-timepicker\n      [(ngModel)]=\"timeStruct\"\n      (ngModelChange)=\"updateTime()\"\n      [meridian]=\"true\">\n    </ngb-timepicker>\n  ",
            styles: [
                "\n    .form-group {\n      width: 100%;\n    }\n  "
            ],
            providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], DateTimePickerComponent);
    return DateTimePickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/calendar-utils/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoUtilsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_header_component__ = __webpack_require__("../../../../../src/app/component/calendar-utils/calendar-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_time_picker_component__ = __webpack_require__("../../../../../src/app/component/calendar-utils/date-time-picker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DemoUtilsModule = (function () {
    function DemoUtilsModule() {
    }
    DemoUtilsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbTimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["a" /* CalendarModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__calendar_header_component__["a" /* CalendarHeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__date_time_picker_component__["a" /* DateTimePickerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__calendar_header_component__["a" /* CalendarHeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__date_time_picker_component__["a" /* DateTimePickerComponent */]]
        })
    ], DemoUtilsModule);
    return DemoUtilsModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/charts/charts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n  min-width: 300px;\n  width: 100%;\n\n}\n\n.chart{\n\tmin-width: 400px;\n\twidth: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\"><br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\"><br>\n\t\t\t<mat-card class=\"chart\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t\t<img mat-card-avatar src=\"assets/images/medical/009-pills-3.png\">\n\t\t\t\t\t\t\t<mat-card-title>\n\t\t\t\t\t\t\t\t<h5>George Will</h5>\n\t\t\t\t\t\t\t</mat-card-title>\n\t\t\t\t\t\t</mat-card-header>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Age: 45</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Code Status: DNR</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">DOB: 01/08/1993</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Sex: Male</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Dosing weight: 90.9 kg</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">MRN: 6272818</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Location: RM 234</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Last Visit: 01/12/17 - P</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Physician: Bill Adler, DO</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Tags: A</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</mat-card>\n\t\t</div>\n\t</div><br>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 col-sm-6\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\n\t \t\t\t<mat-card class=\"example-card\">\n\t \t\t\t\t<mat-card-subtitle>\n\t \t\t\t\t\t<div class=\"row\">\n\t\t \t\t\t\t\t<div class=\"col-md-4\">\n\t\t \t\t\t\t\t\tLab Results\n\t\t \t\t\t\t\t</div>\n\t\t \t\t\t\t\t<div class=\"col-md-4\">\n\t\t \t\t\t\t\t\t11/23/2017 at 1500\n\t\t \t\t\t\t\t</div>\n\t\t \t\t\t\t\t<div class=\"col-md-4\">\n\t\t \t\t\t\t\t\t< Previous\n\t\t \t\t\t\t\t</div>\n\t \t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-card-subtitle><hr>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<canvas baseChart\n\t\t\t\t\t\t            [data]=\"lineChartData\"\n\t\t\t\t\t\t            [labels]=\"lineChartLabels\"\n\t\t\t\t\t\t            [options]=\"lineChartOptions\"\n\t\t\t\t\t\t            [chartType]=\"lineChartType\"\n\t\t\t\t\t\t            (chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t\t            (chartClick)=\"chartClicked($event)\"></canvas>\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\t\t\t\t</div>\n\t\t\t</div><br>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<mat-card>\n\t\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t    <mat-card-subtitle>Head X-ray</mat-card-subtitle>\n\t\t\t\t\t\t  </mat-card-header><hr>\n\t\t\t\t\t\t  <img mat-card-image src=\"assets/images/x_rays/skull_xray.jpg\" alt=\"Photo of a Shiba Inu\">\n\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t</mat-card>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<mat-card>\n\t\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t    <mat-card-subtitle>Chest X-ray</mat-card-subtitle>\n\t\t\t\t\t\t  </mat-card-header><hr>\n\t\t\t\t\t\t  <img mat-card-image src=\"assets/images/x_rays/chest_xray.jpg\" alt=\"Photo of a Shiba Inu\">\n\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t</mat-card>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<mat-card>\n\t\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t    <mat-card-subtitle>Knee X-ray</mat-card-subtitle>\n\t\t\t\t\t\t  </mat-card-header><hr>\n\t\t\t\t\t\t  <img mat-card-image src=\"assets/images/x_rays/knee_xray.jpg\" alt=\"Photo of a Shiba Inu\">\n\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t</mat-card>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t\t<div class=\"col-md-6 col-sm-6\">\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<mat-card class=\"example-card\">\n\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t \t\t\t\t\t<div class=\"col-md-6\">\n\t\t \t\t\t\t\t\tCurrent Medication Orders\n\t\t \t\t\t\t\t</div>\n\t\t \t\t\t\t\t<div class=\"col-md-6\">\n\t\t \t\t\t\t\t\t< Previous\n\t\t \t\t\t\t\t</div>\n\t \t\t\t\t\t</div>\n\t\t\t\t\t</mat-card-subtitle><hr>\n\t\t\t\t\t<mat-card-content>\n\n\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_med of current_medications\">\n\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t      {{current_med.name}} {{current_med.dosage}}\n\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t      {{current_med.frequency}}\n\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t  \n\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t    <input matInput placeholder=\"First name\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t  \n\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t    <input matInput placeholder=\"Age\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t\n\t\t\t\t\t</mat-card-content>\n\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t\t</div><br>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<mat-card class=\"example-card\">\n\t\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t \t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t \t\t\t\t\t\tCurrent Lab Orders\n\t\t\t \t\t\t\t\t</div>\n\t\t\t \t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t \t\t\t\t\t\t< Previous\n\t\t\t \t\t\t\t\t</div>\n\t\t \t\t\t\t\t</div>\n\t\t\t\t\t\t</mat-card-subtitle><hr>\n\t\t\t\t\t\t<mat-card-content>\n\n\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_lab of current_labs\">\n\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t      {{current_lab.name}}\n\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t  \n\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t    <input matInput placeholder=\"First name\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t  \n\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t    <input matInput placeholder=\"Age\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t</mat-card>\n\t\t\t\t</div>\n\t\t\t</div><br>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<mat-card class=\"example-card\">\n\t\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t \t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t \t\t\t\t\t\tCurrent X-Ray Orders\n\t\t\t \t\t\t\t\t</div>\n\t\t\t \t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t \t\t\t\t\t\t< Previous\n\t\t\t \t\t\t\t\t</div>\n\t\t \t\t\t\t\t</div>\n\t\t\t\t\t\t</mat-card-subtitle><hr>\n\t\t\t\t\t\t<mat-card-content>\n\n\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_x_ray of current_x_rays\">\n\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t      {{current_x_ray.name}} \n\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t      Type your name and age\n\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t  \n\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t    <input matInput placeholder=\"First name\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t  \n\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t    <input matInput placeholder=\"Age\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t</mat-card>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\n\t\t</div>\n\n\n\t</div><br>\n\n\t\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/component/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartsComponent = (function () {
    function ChartsComponent() {
        // lineChart
        this.lineChartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.pieChartType = 'pie';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.current_medications = [
            { name: 'Lisinopril', dosage: '20mg', frequency: 'Once daily' },
            { name: 'Metformin', dosage: '500mg', frequency: 'Once daily' },
            { name: 'Novolin', dosage: '70/30', frequency: '5 units ac | 5 units hs' },
            { name: 'Ergocalciferol', dosage: '50,000 IU', frequency: '4 caps. weekly' }
        ];
        this.current_labs = [
            { name: 'Hematocrit', dosage: '20mg', frequency: 'Once daily' },
            { name: 'CBC W/DIFF & PLT CULTURE', dosage: '500mg', frequency: 'Once daily' },
            { name: 'LIPID PANEL COMP METABOLIC PANEL', dosage: '70/30', frequency: '5 units ac | 5 units hs' },
            { name: 'Ergocalciferol', dosage: '50,000 IU', frequency: '4 caps. weekly' }
        ];
        this.current_x_rays = [
            { name: 'Chest X-Ray', dosage: '20mg', frequency: 'Once daily' }
        ];
    }
    ChartsComponent.prototype.randomizeType = function () {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
        this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    };
    ChartsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__("../../../../../src/app/component/charts/charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/charts/charts.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button .contact{\n    border-top: 0.5px ridge lightgray;\n   border-left: 0.5px ridge lightgrey;\n   border-right: 0.5px ridge lightgrey;\n}\n\n.example-form {\n  min-width: 500px;\n  max-width: 500px;\n  width: 300px;\n}\n\n.msg_receive{\n    padding-left:0;\n    margin-left:0;\n}\n.msg_sent{\n    padding-bottom:20px !important;\n    margin-right:0;\n}\n.messages {\n  background: white;\n  padding: 10px;\n  border-radius: 2px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  max-width:100%;\n}\n.messages > p {\n    font-size: 13px;\n    margin: 0 0 0.2rem 0;\n  }\n.messages > time {\n    font-size: 11px;\n    color: #ccc;\n}\n.msg_container {\n    padding: 10px;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.msg_sent > time{\n    float: right;\n}\n\nform > * {\n  width: 600px;\n}\n\n/*::ng-deep .mat-input-wrapper{\n  width: 400px !important;\n}\n*/\n.example-full-width {\n  width: 100%;\n}\n\nmat-toolbar {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.example-form-2 {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n\nmat-icon{\n    font-size:24px !important;\n    height:24px !important;\n    width: 24px !important;\n    vertical-align: middle;\n}\n\n/*.mat-sidenav-container {\n                display: flex;\n                flex: 1;\n                width: 100%;\n                background: transparent;\n\n                > .mat-sidenav-content,\n                > .mat-drawer-content {\n                    display: flex;\n                    flex: 1 1 auto;\n                    min-height: 100%;\n                    height: auto;\n                }\n\n                > .mat-drawer-content {\n                    max-width: 100%;\n                }\n\n                mat-sidenav {\n                    display: flex;\n                    flex-direction: column;\n                    width: 400px;\n                    max-width: 90%;\n                    box-shadow: 0 0 1px rgba(0, 0, 0, .37);\n                    overflow: hidden;\n                }\n            }*/\n/*.chat-footer {\n            min-height: 64px;\n            max-height: 96px;\n            background-color: #F3F4F5;\n            color: rgba(0, 0, 0, 0.87);\n            border-top: 1px solid rgba(0, 0, 0, .08);\n            padding: 8px 8px 8px 16px;\n            .reply-form {\n\n                mat-form-field {\n                    margin: 0;\n                    padding-right: 16px;\n\n                    textarea {\n                        overflow: auto;\n                        max-height: 80px;\n                        transition: height 200ms ease;\n                        &.grow {\n                            height: 80px;\n                        }\n                    }\n\n                    .mat-errors-spacer {\n                        display: none;\n                    }\n                }\n\n                .mat-button {\n                    margin: 0;\n                }\n            }\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\"><br>\n\t\t\t<mat-card>\n\t\t\t\t<mat-sidenav-container >\n\t\t\t\t<mat-sidenav color=\"primary\" #sidenav opened=\"true\" mode=\"side\">\n\t\t\t\t\t<!-- SIDENAV CONTENT -->\n\t\t\t\t\t<div class=\"sidenav-content\" fusePerfectScrollbar fxFlex>\n\n\t\t\t\t\t    <!-- CHATS CONTENT -->\n\t\t\t\t\t    <div >\n\n\t\t\t\t\t        <!-- CHATS LIST-->\n\t\t\t\t\t        <div class=\"chat-list\" fxLayout=\"column\" *ngFor=\"let member of staff\">\n\n<!-- \t\t\t\t\t            <div matSubheader>\n\t\t\t\t\t                Chats\n\t\t\t\t\t            </div> -->\n\n\t\t\t\t\t            <button mat-button class=\"contact\" (click)=\"onAddReceiver(member.username)\">\n\t\t\t\t\t            \t{{member.username}}\n\n<!-- \n\t\t\t\t\t            \t<input type=\"text\"  name=\"{{member.username}}\" [(ngModel)]=\"newMessage.receiver\" (click)=\"onAddReceiver(member.username)\">{{member.username}} -->\n<!-- \n\t\t\t\t\t                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n\t\t\t\t\t                    <div class=\"avatar-wrapper\" fxFlex=\"0 1 auto\" fxLayoutAlign=\"center center\">\n\t\t\t\t\t                        <img src=\"\" />\n\t\t\t\t\t                        <mat-icon ></mat-icon>\n\t\t\t\t\t                    </div>\n\n\t\t\t\t\t                    <div fxLayout=\"row\" fxFlex>\n\n\t\t\t\t\t                        <div class=\"\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\t\t\t\t\t                            <div ></div>\n\t\t\t\t\t                        </div>\n\n\t\t\t\t\t                        <div fxLayout=\"column\" fxLayoutAlign=\"center end\">\n\t\t\t\t\t                            <div class=\"contact-last-message-time\">\n\t\t\t\t\t                                <p  name=\"{{symptom.name}}\" [(ngModel)]=\"newMessage.receiver\" (click)=\"onAddReceiver(member.username)\">{{member.username}}</p>\n\t\t\t\t\t                            </div>\n\t\t\t\t\t                            <div ></div>\n\t\t\t\t\t                        </div>\n\t\t\t\t\t                    </div>\n\t\t\t\t\t                </div> -->\n\t\t\t\t\t            </button><hr>\n\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <!-- / CHATS LIST-->\n\n\t\t\t\t\t        <!-- CONTACTS LIST-->\n<!-- \t\t\t\t\t        <div class=\"contact-list\" fxLayout=\"column\">\n\n\t\t\t\t\t            <div matSubheader >\n\t\t\t\t\t                Contacts\n\t\t\t\t\t            </div>\n\n\t\t\t\t\t            <button mat-button class=\"\">\n\n\t\t\t\t\t                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t                    <div class=\"avatar-wrapper\" fxFlex=\"0 1 auto\">\n\t\t\t\t\t                        <img src=\"\" class=\"mat-avatar avatar\" alt=\"\"/>\n\t\t\t\t\t                        <mat-icon ></mat-icon>\n\t\t\t\t\t                    </div>\n\n\t\t\t\t\t                    <div class=\"\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\t\t\t\t\t                        <div class=\"contact-name\">contact.name</div>\n\t\t\t\t\t                        <p class=\"contact-mood\">contact.mood</p>\n\t\t\t\t\t                    </div>\n\t\t\t\t\t                </div>\n\t\t\t\t\t            </button>\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <!-- / CONTACTS LIST-->\n\n\t\t\t\t\t        <!-- NO RESULTS MESSAGE -->\n\t\t\t\t\t        <div >\n\t\t\t\t\t            No results..\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <!-- NO RESULTS MESSAGE-->\n\n\t\t\t\t\t    </div> -->\n\t\t\t\t\t    <!-- / CHATS CONTENT -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- / SIDENAV CONTENT -->\n\t\t\t\t</mat-sidenav>\n\t\t\t\t<mat-sidenav-content>\n\n\t\t\t\t\t<mat-toolbar>  \n\n\t\t\t\t\t    <span>First Row</span>\n\t\n\t\t\t\t\t  \t<button mat-icon-button [mat-menu-trigger-for]=\"menu\">\n\t\t\t\t\t      <mat-icon>more_vert</mat-icon>\n\t\t\t\t\t    </button>\n\t\t\t\t\t  </mat-toolbar>\n\t\t\t\t\t  <mat-menu x-position=\"before\" #menu=\"matMenu\">\n\t\t\t\t\t    <button mat-menu-item>Option 1</button>\n\t\t\t\t\t    <button mat-menu-item>Option 2</button>\n\t\t\t\t\t  </mat-menu>\n\n\n\n\t\t\t\t\t<div #scrollMe style=\"overflow: scroll; height: 300px; width: 100%\">\n\t\t\t\t\t<div *ngFor=\"let message of messages\" >\n\t\t\t\t\t\t<div class=\"row msg_container base_sent\">\n\t                        <div class=\"col-md-10 col-xs-10\">\n\t                            <div class=\"messages msg_sent\">\n\t                                <p>{{ message.return_comment }}</p>\n\t                                <time datetime=\"2009-11-13T20:00\">Timothy • 51 min</time>\n\t                            </div>\n\t                        </div>\n\t                        <div class=\"col-md-2 col-xs-2 avatar\">\n\t                            <img src=\"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg\" class=\" img-responsive \">\n\t                        </div>\n\t                    </div>\n\t                    <div class=\"row msg_container base_receive\">\n\t                        <div class=\"col-md-2 col-xs-2 avatar\">\n\t                            <img src=\"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg\" class=\" img-responsive \">\n\t                        </div>\n\t                        <div class=\"col-md-10 col-xs-10\">\n\t                            <div class=\"messages msg_receive\">\n\t                                <p>{{ message.comment }}</p>\n\t                                <time datetime=\"2009-11-13T20:00\">Timothy • 51 min</time>\n\t                            </div>\n\t                        </div>\n\t                    </div>\n\t                </div>\n<!-- \t\t\t\t\t    <div *ngFor=\"let message of messages\" >\n\t\t\t\t\t                    \n\t\t\t\t\t\t    <div class=\"row\" style=\"margin-left:2%;margin-top:0%  \">\n\n\t\t\t\t\t\t      <button class=\"col-sm-3\" class=\"btn\">{{ message.return_comment }}</button>\n\n\t\t\t\t\t\t    </div>\n\n\t\t\t\t\t\t    <div class=\"row\">\n\t\t\t\t\t\t      <div class=\"col-sm-6\"> </div>\n\t\t\t\t\t\t      <button class=\"col-sm-3\" class=\"btn btn-success\">{{ message.comment }}</button>\n\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t    \n\n\t\t\t\t\t    </div> -->\n\t\t\t\t   </div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t<div class=\"chat-footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\t\t\t\t\t\t\t<form (ngSubmit)=\"onSendMessage()\" class=\"reply-form\">\n\t\t\t\t\t\t\t    <mat-form-field class=\"\" fxFlex floatPlaceholder=\"never\">\n\t\t\t\t\t                <textarea matInput #replyInput placeholder=\"Type and hit enter to send message\"\n\t\t\t\t\t                          [(ngModel)]=\"newMessage.comment\" name=\"message\"></textarea>\n\t\t\t\t\t            </mat-form-field>\n\n\t\t\t\t\t            <button mat-fab class=\"\" type=\"submit\" aria-label=\"Send message\">\n\t\t\t\t\t                <mat-icon>send</mat-icon>\n\t\t\t\t\t            </button>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t    </div>\n\n\t\t\t        </div>\n\t\t\t    </mat-sidenav-content>\n\t\t\t    \n\t\t\t    </mat-sidenav-container>\n\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* unused harmony export Message */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
        this.newMessage = new Message();
        this.users = [{ username: 'Sam' }, { username: 'Cherrly' }, { username: 'George' }, { username: 'Bob' }, { username: 'Sandra' }];
        this.staff = [
            { id: 1, username: 'Sam' },
            { id: 2, username: 'Cherrly' },
            { id: 3, username: 'George' },
            { id: 4, username: 'Bob' },
            { id: 5, username: 'Sandra' }
        ];
        this.messages = [
            { id: 1, user: 'me', receiver: 'Sam', comment: 'this comment 1', return_ser: 'Sam', return_comment: 'return comment 1' },
            { id: 2, user: 'me', receiver: 'Sam', comment: 'this comment 2', return_ser: 'Sam', return_comment: 'return comment 2' },
            { id: 3, user: 'me', receiver: 'Sam', comment: 'this comment 3', return_ser: 'Sam', return_comment: 'return comment 3' },
            { id: 4, user: 'me', receiver: 'Sam', comment: 'this comment 4', return_ser: 'Sam', return_comment: 'return comment 4' },
            { id: 5, user: 'me', receiver: 'Cherrly', comment: 'this comment 1', return_ser: 'Cherrly', return_comment: 'return comment 5' },
            { id: 6, user: 'me', receiver: 'Cherrly', comment: 'this comment 2', return_ser: 'Cherrly', return_comment: 'return comment 6' },
            { id: 7, user: 'me', receiver: 'Cherrly', comment: 'this comment 3', return_ser: 'Cherrly', return_comment: 'return comment 7' },
            { id: 8, user: 'me', receiver: 'Cherrly', comment: 'this comment 4', return_ser: 'Cherrly', return_comment: 'return comment 8' },
        ];
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.onAddReceiver = function (username) {
        this.newMessage.receiver = username;
    };
    ChatComponent.prototype.onSendMessage = function () {
        this.newMessage.id = 5;
        this.newMessage.user = 'random_5';
        this.newMessage.return_ser = 'random_51';
        this.newMessage.return_comment = 'return comment 2';
        console.log(this.newMessage);
        this.messages.push(this.newMessage);
        console.log(this.messages);
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/component/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chat/chat.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());

var Message = (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/component/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr { background-color: #ffcc66; height: 2px; border: 0; width: 100% }\n\n.patient_info {\n\tfont-size: 0.875em;\n}\n\n.patient_info.p {\n\tfont-size: 0.875em;\n\tfont-weight: 100;\n}\n\nh5 {\n     font-family: 'Montserrat Black', sans-serif;\n     font-weight: 400;\n     font-size: 0.875em;\n\n     width: 8em\n }\n\n  .vitals {\n     font-family: 'Montserrat Medium', sans-serif;\n     font-weight: 400;\n     font-size: 1.5em;\n     color:rgb(72, 203, 71);\n }\n\n img.tab {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border: 1px solid #fff;\n    border-radius: 4px;\n    padding: 5px;\n    width: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\"><br>\n\t\t\t<mat-card>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t\t<img mat-card-avatar src=\"assets/images/medical/009-pills-3.png\">\n\t\t\t\t\t\t\t<mat-card-title>\n\t\t\t\t\t\t\t\t<h5>George Will</h5>\n\t\t\t\t\t\t\t</mat-card-title>\n\t\t\t\t\t\t</mat-card-header>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Age: 45</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Code Status: DNR</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">DOB: 01/08/1993</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Sex: Male</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Dosing weight: 90.9 kg</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">MRN: 6272818</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Location: RM 234</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Last Visit: 01/12/17 - P</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Physician: Bill Adler, DO</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Tags: A</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</mat-card>\n\t\t</div>\n\t</div><br>\n\n\t<mat-tab-group>\n\n\t\t<mat-tab label=\"Home\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\t\t\tVitals\n\t\t\t\t\t\t\t</mat-card-subtitle>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\t\t\tLast reading: 01/23/17 at 1500\n\t\t\t\t\t\t\t</mat-card-subtitle>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\t\t\t< Previous\n\t\t\t\t\t\t\t</mat-card-subtitle>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div><hr>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<h5>Temp</h5>\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t\t\t<p class=\"vitals\">97.9</p>\n\t\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<h5>Blood Pr.</h5>\n\t\t\t\t\n\n\t\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t\t\t<p class=\"vitals\">97.9</p>\n\t\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\n\t\t\t\t\t\t\t<h5>Heart Rate</h5>\n\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t\t<p class=\"vitals\">140/80</p>\n\t\t\t\t\t\t</mat-card-content>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\n\t\t\t\t\t\t\t\t<h5>Resp Rate</h5>\n\t\t\t\n\n\t\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t\t\t<p class=\"vitals\">81</p>\n\t\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<h5>Oxygen</h5>\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t\t\t<p class=\"vitals\">18</p>\n\t\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<h5>Last param</h5>\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t\t\t<p class=\"vitals\">98</p>\n\t\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\t\tSystem Review\n\t\t\t\t\t\t</mat-card-subtitle>\n\t\t\t\t\t</mat-card-header>\n\t\t\t\t\t<mat-tab-group class=\"demo-tab-group\">\n\t\t\t\t\t  <mat-tab label=\"X-ray\">\n\t\t\t\t\t  \t<ng-template mat-tab-label>\n\t\t\t\t\t      <img class=\"tab\" src=\"assets/images/icons/x-ray-1.svg\">\n\t\t\t\t\t    </ng-template>\n\t\t\t\t\t    <div class=\"demo-tab-content\" [ngSwitch]=\"switch_x_ray\">\n\t\t\t\t\t      <app-x-ray *ngSwitchCase=\"'x-ray'\"></app-x-ray>\n\t\t\t\t\t      <app-new-x-ray *ngSwitchCase=\"'new-x-ray'\"></app-new-x-ray>\n\t\t\t\t\t      <button *ngSwitchCase=\"'x-ray'\" (click)=\"change(13)\"> new x-ray</button>\n\t\t\t\t\t      <button *ngSwitchCase=\"'new-x-ray'\" (click)=\"change(14)\"> submit review</button> \n\t\t\t\t\t    </div>\n\t\t\t\t\t  </mat-tab>\n\t\t\t\t\t  <mat-tab label=\"Tab 2\">\n\t\t\t\t\t    <ng-template mat-tab-label>\n\t\t\t\t\t      <img class=\"tab\" src=\"assets/images/icons/heart.svg\">\n\t\t\t\t\t    </ng-template>\n\t\t\t\t\t    <div class=\"demo-tab-content\" [ngSwitch]=\"switch_heart\">\n\t\t\t\t\t      <app-heart *ngSwitchCase=\"'heart'\"></app-heart>\n\t\t\t\t\t      <app-new-heart *ngSwitchCase=\"'new_heart'\"></app-new-heart>\n\t\t\t\t\t      <button *ngSwitchCase=\"'heart'\" (click)=\"change(9)\"> new heart</button>\n\t\t\t\t\t      <button *ngSwitchCase=\"'new_heart'\" (click)=\"change(10)\"> submit review</button> \n\t\t\t\t\t    </div>   \n\t\t\t\t\t  </mat-tab>\n\t\t\t\t\t  <mat-tab label=\"Tab 3\" >\n\t\t\t\t\t    <ng-template mat-tab-label>\n\t\t\t\t\t      <img class=\"tab\" src=\"assets/images/icons/knee-1.svg\">\n\t\t\t\t\t    </ng-template>\n\t\t\t\t\t    <div class=\"demo-tab-content\" [ngSwitch]=\"switch_knee\">\n\t\t\t\t\t      <app-knee *ngSwitchCase=\"'knee'\"></app-knee>\n\t\t\t\t\t      <app-new-knee *ngSwitchCase=\"'new_knee'\"></app-new-knee> \n\t\t\t\t\t      <button *ngSwitchCase=\"'knee'\" (click)=\"change(7)\"> new knee</button>\n\t\t\t\t\t      <button *ngSwitchCase=\"'new_knee'\" (click)=\"change(8)\"> submit review</button>\n\t\t\t\t\t    </div>\n\t\t\t\t\t  </mat-tab>\n\t\t\t\t\t  <mat-tab label=\"Tab 4\">\n\t\t\t\t\t  \t<ng-template mat-tab-label>\n\t\t\t\t\t      <img class=\"tab\" src=\"assets/images/icons/kidney-1.svg\">\n\t\t\t\t\t    </ng-template>\n\t\t\t\t\t   <div class=\"demo-tab-content\" [ngSwitch]=\"switch_kidneys\">\n\t\t\t\t\t      <app-kidneys *ngSwitchCase=\"'kidneys'\"></app-kidneys>\n\t\t\t\t\t      <app-new-kidneys *ngSwitchCase=\"'new_kidneys'\"></app-new-kidneys>\n\t\t\t\t\t      <button *ngSwitchCase=\"'kidneys'\" (click)=\"change(5)\"> new kidneys</button>\n\t\t\t\t\t      <button *ngSwitchCase=\"'new_kidneys'\" (click)=\"change(6)\"> submit review</button> \n\t\t\t\t\t    </div>  \n\t\t\t\t\t  </mat-tab>\n\t\t\t\t\t  <mat-tab label=\"Tab 5\">\n\t\t\t\t\t  \t<ng-template mat-tab-label>\n\t\t\t\t\t      <img class=\"tab\" src=\"assets/images/icons/stomach.svg\">\n\t\t\t\t\t    </ng-template>\n\t\t\t\t\t   <div class=\"demo-tab-content\" [ngSwitch]=\"switch_stomach\">\n\t\t\t\t\t      <app-stomach *ngSwitchCase=\"'stomach'\"></app-stomach>\n\t\t\t\t\t      <app-new-stomach *ngSwitchCase=\"'new_stomach'\"></app-new-stomach> \n\t\t\t\t\t      <button *ngSwitchCase=\"'stomach'\" (click)=\"change(11)\"> new stomach</button>\n\t\t\t\t\t      <button *ngSwitchCase=\"'new_stomach'\" (click)=\"change(12)\"> submit review</button>\n\t\t\t\t\t    </div> \n\t\t\t\t\t  </mat-tab>\n\t\t\t\t\t  <mat-tab label=\"Tab 6\">\n\t\t\t\t\t  \t<ng-template mat-tab-label>\n\t\t\t\t\t      <img class=\"tab\" src=\"assets/images/icons/lungs-1.svg\">\n\t\t\t\t\t    </ng-template>\n\t\t\t\t\t   <div class=\"demo-tab-content\" [ngSwitch]=\"switch_lungs\">\n\t\t\t\t\t      <app-lungs *ngSwitchCase=\"'lungs'\"></app-lungs>\n\t\t\t\t\t      <app-new-lungs *ngSwitchCase=\"'new_lungs'\"></app-new-lungs> \n\t\t\t\t\t      <button *ngSwitchCase=\"'lungs'\" (click)=\"change(3)\"> new lungs</button>\n\t\t\t\t\t      <button *ngSwitchCase=\"'new_lungs'\" (click)=\"change(4)\"> submit review</button>\n\t\t\t\t\t    </div>  \n\t\t\t\t\t  </mat-tab>\n\t\t\t\t\t  <mat-tab label=\"Tab 7\">\n\t\t\t\t\t  \t<ng-template mat-tab-label>\n\t\t\t\t\t      <img class=\"tab\" src=\"assets/images/icons/brain.svg\">\n\t\t\t\t\t    </ng-template>\n\t\t\t\t\t   <div class=\"demo-tab-content\" [ngSwitch]=\"switch_brain\">\n\t\t\t\t\t      <app-brain *ngSwitchCase=\"'brain'\"></app-brain>\n\t\t\t\t\t      <app-new-brain *ngSwitchCase=\"'new_brain'\"></app-new-brain> \n\t\t\t\t\t      <button *ngSwitchCase=\"'brain'\" (click)=\"change(1)\"> new brain</button>\n\t\t\t\t\t      <button *ngSwitchCase=\"'new_brain'\" (click)=\"change(2)\"> submit review</button>\n\t\t\t\t\t    </div>\n\t\t\t\t\t       \n\t\t\t\t\t  </mat-tab>\n\t\t\t\t\t</mat-tab-group>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t</div><br>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\tImmunization History\n\t\t\t\t\t</mat-card-subtitle><hr>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t\t      <h5>Lisinopril 20mg</h5>\n\t\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      <h5>Once Daily</h5>\n\t\t\t\t\t\t    </mat-panel-description>\n\n\t\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <h5>\n\t\t\t\t\t\t    First name\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <h5>\n\t\t\t\t\t\t    Age\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\tFamily History\n\t\t\t\t\t</mat-card-subtitle><hr>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\tgfdgfdgfdg\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\tCurrent Medications\n\t\t\t\t\t</mat-card-subtitle><hr>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\tgfdgfdgfdg\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t</div><br>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\tSocial History\n\t\t\t\t\t</mat-card-subtitle><hr>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\tgfdgfdgfdg\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\tSurgical History\n\t\t\t\t\t</mat-card-subtitle><hr>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\tgfdgfdgfdg\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\tCurrent Medical Conditions\n\t\t\t\t\t</mat-card-subtitle><hr>\n\n<!-- \t\t\t\t\t<mat-horizontal-stepper [linear]=\"true\">\n\t\t\t\t\t\t  <mat-step>\n\t\t\t\t\t\t    <ng-template matStepLabel>Content 1</ng-template>\n\t\t\t\t\t\t    <div>\n\t\t\t\t\t\t      <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t\t\t      <button mat-button matStepperNext>Next</button>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </mat-step>\n\t\t\t\t\t\t  <mat-step>\n\t\t\t\t\t\t    <ng-template matStepLabel>Content 2</ng-template>\n\t\t\t\t\t\t    <div>\n\t\t\t\t\t\t      <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t\t\t      <button mat-button matStepperNext>Next</button>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </mat-step>\n\t\t\t\t\t\t  <mat-step>\n\t\t\t\t\t\t    <ng-template matStepLabel>Done</ng-template>\n\t\t\t\t\t\t    You are now done.\n\t\t\t\t\t\t    <div>\n\t\t\t\t\t\t      <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </mat-step>\n\t\t\t\t\t\t</mat-horizontal-stepper> -->\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t<mat-horizontal-stepper [linear]=\"isLinear\">\n\t\t\t\t\t  <mat-step [stepControl]=\"firstFormGroup\">\n\t\t\t\t\t    <form [formGroup]=\"firstFormGroup\">\n\t\t\t\t\t      <ng-template matStepLabel>initial malaria diagnosis</ng-template>\n\t\t\t\t\t      \t<ul>\n\t\t\t\t\t      \t\t<li>symptoms check</li>\n\t\t\t\t\t      \t\t<li>lab tests</li>\n\t\t\t\t\t      \t</ul>\n\t\t\t\t\t      <div>\n\t\t\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t\t\t      </div>\n\t\t\t\t\t    </form>\n\t\t\t\t\t  </mat-step>\n\t\t\t\t\t  <mat-step [stepControl]=\"secondFormGroup\">\n\t\t\t\t\t    <form [formGroup]=\"secondFormGroup\">\n\t\t\t\t\t      <ng-template matStepLabel>cerebral malaria</ng-template>\n\t\t\t\t\t      <ul>\n\t\t\t\t      \t\t<li>symptoms check</li>\n\t\t\t\t      \t\t<li>lab tests</li>\n\t\t\t\t      \t</ul>\n\t\t\t\t\t      <div>\n\t\t\t\t\t        <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t\t\t      </div>\n\t\t\t\t\t    </form>\n\t\t\t\t\t  </mat-step>\n\t\t\t\t\t  <mat-step>\n\t\t\t\t\t    <ng-template matStepLabel>admission</ng-template>\n\t\t\t\t\t    \t<ul>\n\t\t\t\t\t      \t\t\n\t\t\t\t\t      \t\t<li>lab tests</li>\n\t\t\t\t\t      \t\t<li>IV chloroquinone</li>\n\t\t\t\t\t      \t</ul>\n\t\t\t\t\t    <div>\n\t\t\t\t\t      <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t\t    </div>\n\t\t\t\t\t  </mat-step>\n\t\t\t\t\t</mat-horizontal-stepper>\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t</div><br>\n\t\t\n\t\t</mat-tab>\n\n\t</mat-tab-group>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
        this.new_kidneys = false;
        this.kidneys = true;
        this.new_brain = false;
        this.brain = true;
        this.switch_brain = 'brain';
        this.switch_kidneys = 'kidneys';
        this.switch_knee = 'knee';
        this.switch_lungs = 'lungs';
        this.switch_heart = 'heart';
        this.switch_stomach = 'stomach';
        this.switch_x_ray = 'x-ray';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
    };
    HomeComponent.prototype.change = function (data) {
        console.log(data);
        if (data == 1) {
            this.switch_brain = 'new_brain';
        }
        if (data == 2) {
            this.switch_brain = 'brain';
        }
        if (data == 3) {
            this.switch_lungs = 'new_lungs';
        }
        if (data == 4) {
            this.switch_lungs = 'lungs';
        }
        if (data == 5) {
            this.switch_kidneys = 'new_kidneys';
        }
        if (data == 6) {
            this.switch_kidneys = 'kidneys';
        }
        if (data == 7) {
            this.switch_knee = 'new_knee';
        }
        if (data == 8) {
            this.switch_knee = 'knee';
        }
        if (data == 9) {
            this.switch_heart = 'new_heart';
        }
        if (data == 10) {
            this.switch_heart = 'heart';
        }
        if (data == 11) {
            this.switch_stomach = 'new_stomach';
        }
        if (data == 12) {
            this.switch_stomach = 'stomach';
        }
        if (data == 13) {
            this.switch_x_ray = 'new-x-ray';
        }
        if (data == 14) {
            this.switch_x_ray = 'x-ray';
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/component/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  .vl {\n    border-left: 0.5px solid rgba(0, 0, 0, 0.349);\n    height: 380px;\n}\nh1:before {\n    content: 'XELPHA';\n    color: #DE5C07;\n    font-size: 70px;\n}\nh1:after {\n    content: 'health';\n    color: #14CF82;\n    font-size: 70px;\n}\n\nform button {\n  background-color:#DE5C07!important;\n  color: white!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10%; background-color:#FFF;\" >\n  <div class=\"row\"  >\n    <div style=\"text-align: center\" class=\"col-sm-6 align-self-center\">\n      <h1 style=\"font-size: 70px\"></h1>\n    </div>\n    <div class=\"col-sm-1\">\n        <div class=\"vl\"></div>\n    </div>\n    <div class=\"col-sm-4 align-self-center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          \n          <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Email\">\n            </mat-form-field>\n          </form>\n        </div>\n        <div class=\"row\">\n            \n            <form class=\"example-form\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Password \">\n              </mat-form-field>\n            </form>\n          </div>\n          <div  class=\"row\">\n              <div style=\"text-align: center\" class=\"col-sm-12\">\n              <a href=\"#\">Forgot Password?Signup</a>\n            </div>\n          </div>\n          <div style=\"margin-top: 8%\" class=\"row\">\n            <div class=\"col-sm-9\"></div>\n              <div class=\"col-sm-2 align-self-end\">\n\t              <form class=\"example-form\">\n\t                  <button mat-button >Login</button>\n\t              </form>\n\t            </div>\n            </div>\n            \n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/component/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/medications/medications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-no-ink{ background-color:#cccc00; }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/medications/medications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\"><br>\n\t\t\t<mat-card>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t\t<img mat-card-avatar src=\"assets/images/medical/009-pills-3.png\">\n\t\t\t\t\t\t\t<mat-card-title>\n\t\t\t\t\t\t\t\t<h5>George Will</h5>\n\t\t\t\t\t\t\t</mat-card-title>\n\t\t\t\t\t\t</mat-card-header>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Age: 45</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Code Status: DNR</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">DOB: 01/08/1993</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Sex: Male</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Dosing weight: 90.9 kg</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">MRN: 6272818</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Location: RM 234</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Last Visit: 01/12/17 - P</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Physician: Bill Adler, DO</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Tags: A</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</mat-card>\n\t\t</div>\n\t</div><br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-8\">\n\t\t<mat-card>\n\t\t\t<mat-tab-group>\n\t\t\t\t\n\t\t\t\t<mat-tab label=\"Scheduled\" class=\"mat-accent\">\n\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_med of current_medications\">\n\t\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t\t      {{current_med.name}} {{current_med.dosage}}\n\t\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      {{current_med.frequency}}\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      {{current_med.frequency}}\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <h5>\n\t\t\t\t\t\t    First name\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <h5>\n\t\t\t\t\t\t    Age\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t  <button mat-raised-button >add </button>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"Unscheduled\">\n\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_med of current_medications\">\n\t\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t\t      {{current_med.name}} {{current_med.dosage}}\n\t\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      {{current_med.frequency}}\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      {{current_med.frequency}}\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <h5>\n\t\t\t\t\t\t    First name\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <h5>\n\t\t\t\t\t\t    Age\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t  <button mat-raised-button >add </button>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"PRN\">\n\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_med of current_medications\">\n\t\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t\t      {{current_med.name}} {{current_med.dosage}}\n\t\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      {{current_med.frequency}}\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      {{current_med.frequency}}\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <h5>\n\t\t\t\t\t\t    First name\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <h5>\n\t\t\t\t\t\t    Age\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t  <button mat-raised-button >add </button>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"Continous Infusion(s)\">\n\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_med of current_medications\">\n\t\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t\t      {{current_med.name}} {{current_med.dosage}}\n\t\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      {{current_med.frequency}}\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      {{current_med.frequency}}\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <h5>\n\t\t\t\t\t\t    First name\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <h5>\n\t\t\t\t\t\t    Age\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t  <button mat-raised-button >add </button>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-tab>\n\t\t\t\t\n\t\t\t</mat-tab-group>\n\t\t</mat-card>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\tCurrent Medication Orders\n\t\t\t\t\t</mat-card-subtitle>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_med of current_medications\">\n\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t      {{current_med.name}} {{current_med.dosage}}\n\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t      {{current_med.frequency}}\n\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t    <input matInput placeholder=\"First name\">\n\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t    <input matInput placeholder=\"Age\">\n\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\t\t\t</div><br>\n\t\t\t<div class=\"row\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\tCurrent Lab Orders\n\t\t\t\t\t</mat-card-subtitle>\n\t\t\t\t\t<mat-card-content *ngIf=\"listLab\">\n\t\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_lab of current_labs\">\n\t\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t\t      {{current_lab.name}}\n\t\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      Once Daily\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      <button mat-raised-button color=\"accent\" (click)=\"labSwitch()\">\n\t\t\t\t\t\t      \t\tNew\n\t\t\t\t\t\t      </button>\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t\t    <input matInput placeholder=\"First name\">\n\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t\t    <input matInput placeholder=\"Age\">\n\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t</mat-expansion-panel>\n\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t<mat-card-content *ngIf=\"newLab\">\n\t\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_lab of current_labs\">\n\t\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t\t      {{current_lab.name}}\n\t\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      old\n\t\t\t\t\t\t    </mat-panel-description>\n\n\t\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t\t<form (ngSubmit)=\"onSubmit()\">\n\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t    <input matInput placeholder=\"First name\">\n\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t\t    <input matInput placeholder=\"Age\">\n\t\t\t\t\t\t\t  </mat-form-field>\n\n\t\t\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t\t    <input matInput placeholder=\"Age\">\n\t\t\t\t\t\t\t  </mat-form-field>\n\n\t\t\t\t\t\t\t  <button mat-raised-button type=\"submit\" class=\"mat-accent\">add </button>\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</mat-expansion-panel> \n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\t\t\t</div><br>\n\t\t\t<div class=\"row\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\t\tCurrent X-Ray Orders\n\t\t\t\t\t</mat-card-subtitle>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<mat-expansion-panel *ngFor = \"let current_x_ray of current_x_rays\">\n\t\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t      {{current_x_ray.name}} \n\t\t\t\t\t    </mat-panel-title>\n\t\t\t\t\t\t    <mat-panel-description>\n\t\t\t\t\t\t      Once Daily\n\t\t\t\t\t\t    </mat-panel-description>\n\t\t\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t    <input matInput placeholder=\"First name\">\n\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t    <input matInput placeholder=\"Age\">\n\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/medications/medications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MedicationsComponent = (function () {
    function MedicationsComponent() {
        this.newLab = false;
        this.listLab = true;
        this.current_medications = [
            { name: 'Lisinopril', dosage: '20mg', frequency: 'Once daily' },
            { name: 'Metformin', dosage: '500mg', frequency: 'Once daily' },
            { name: 'Novolin', dosage: '70/30', frequency: '5 units ac | 5 units hs' },
            { name: 'Ergocalciferol', dosage: '50,000 IU', frequency: '4 caps. weekly' }
        ];
        this.current_labs = [
            { name: 'Hematocrit', dosage: '20mg', frequency: 'Once daily' },
            { name: 'CBC W/DIFF & PLT CULTURE', dosage: '500mg', frequency: 'Once daily' },
            { name: 'LIPID PANEL COMP METABOLIC PANEL', dosage: '70/30', frequency: '5 units ac | 5 units hs' },
            { name: 'Ergocalciferol', dosage: '50,000 IU', frequency: '4 caps. weekly' }
        ];
        this.current_x_rays = [
            { name: 'Chest X-Ray', dosage: '20mg', frequency: 'Once daily' }
        ];
    }
    MedicationsComponent.prototype.ngOnInit = function () {
    };
    MedicationsComponent.prototype.labSwitch = function () {
        this.newLab = true;
        this.listLab = false;
    };
    MedicationsComponent.prototype.onSubmit = function () {
        this.newLab = false;
        this.listLab = true;
    };
    MedicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-medications',
            template: __webpack_require__("../../../../../src/app/component/medications/medications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/medications/medications.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], MedicationsComponent);
    return MedicationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 650px;\n    \n}\n\nimg {\n\n    width: 100%; \n\n}\n\n.flex-item {\n   \n\n    width: 100%;\n    height: 110px;\n    margin-left: 10px;\n    margin-top: 0;\n\n    line-height: 55px;\n\n    text-align: center;\n    box-sizing: border-box;\n\n\n  \n   border-top: 0.5px ridge lightgray;\n   border-left: 0.5px ridge lightgrey;\n   border-right: 0.5px ridge lightgrey;\n   \n}\n\nbutton{\n      background-color: $mat-primary;\n}\n\n/*a {\n  display: inline-block;\n   \n    width: 100%;\n    margin-top: 0;\n    line-height: 55px;\n    min-height: 55px;\n    height: 100px;\n\n\n  \n   border-bottom: 0.5px ridge lightgray;\n   border-left: 0.5px ridge lightgrey;\n   border-right: 0.5px ridge lightgrey;\n   \n}\n\n*/\n\na{\n\n  border-bottom: 0.5px ridge lightgray;\n  display: block;\n  min-height: 4em;\n    display: table-cell;\n    vertical-align: middle;\n    background-color:#f2f2f2;\n\n}\n\nh4\n{\n    vertical-align: middle;\n   \n}\n\n\n\n.white-text{\n\tcolor: #FFF!important;\n}\n\nmat-icon{\n    font-size:48px !important;\n    height:48px !important;\n    width: 48px !important;\n    vertical-align: middle;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list color=\"mat-primary\">\n\t<a mat-list-item routerLink=\"/patients\">\n      <mat-icon matListIcon >account_circle</mat-icon>\n      <h4 matLine>Patients</h4>\n    </a>\n\n\t<a mat-list-item routerLink=\"/appointment\">\n      <mat-icon mat-list-icon >today</mat-icon>\n      <h4 matLine>Appointment</h4>\n    </a>\n\n  \t<a mat-list-item routerLink=\"/tasks\" >\n      <mat-icon mat-list-icon >today</mat-icon>\n      <h4 matLine>Tasks</h4>\n    </a>\n\n  \t<a mat-list-item routerLink=\"/medications\" >\n      <mat-icon matListIcon >healing</mat-icon>\n      <h4 matLine>Medications</h4>\n    </a>\n\n    <a mat-list-item routerLink=\"/home\" >\n      <mat-icon matListIcon>assessment</mat-icon>\n      <h4 matLine>History</h4>\n    </a>\n\n\t<a mat-list-item routerLink=\"/charts\">\n\t  <mat-icon matListIcon>trending_up</mat-icon>\n\t  <h4 matLine>Chart</h4>\n\t</a>\n\n  \t<a mat-list-item routerLink=\"/summary\" >\n      <mat-icon matListIcon>info_outline</mat-icon>\n      <h4 matLine>Summary</h4>\n  \t</a>\n\n</mat-nav-list>\n\n\n<!-- \t<div class=\"row\">\n\t  <div class=\"col-md-12\" >\n\t  \t<div class=\"row\">\n\n\t    <button mat-raised-button ><br>\n\t    \t<img src=\"assets/images/medical/025-medical-history-3.png\" alt=\"Random first slide\"><br>\n\t    </button>\n\t    </div>\n\t    <div class=\"row\">\n\t    <button mat-raised-button class=\"flex-item\" color=\"primary\">\n\t    \t<mat-icon mat-list-icon > today</mat-icon><br>\n\t      <h5>  Dashboard </h5>\n\t    </button>\n\t    </div>\n\t    <div class=\"row\">\n\t    <button mat-raised-button color=\"primary\" class=\"flex-item\">\n\t  \n\t\t      <mat-icon mat-list-icon style=\"text-align: center ;\">healing</mat-icon><br>\n\t\t      <h5 style=\"text-align: center ;\">  Dashboard </h5>\n\n\t    </button>\n\t    </div>\n\t    <div class=\"row\">\n\t    <button mat-raised-button color=\"primary\" class=\"flex-item\" >\n\t      <h5 style=\"text-align: center ;\">  Dashboard </h5>\n\t    </button>\n\t    </div>\n\t    <div class=\"row\">\n\t    <button mat-raised-button color=\"primary\" class=\"flex-item\" >\n\t      <h5 style=\"text-align: center ;\">  Dashboard </h5>\n\t    </button>\n\t    </div>\n\t    <div class=\"row\">\n\t    <button mat-raised-button color=\"primary\" class=\"flex-item\" >\n\t      <h5 style=\"text-align: center ;\">  Dashboard </h5>\n\t    </button>\n\t    </div>\n\n\t    \n\t  </div>\n\n\n\n\t</div>\n -->\n"

/***/ }),

/***/ "../../../../../src/app/component/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/component/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/nav-bar/nav-bar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/patients/patients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 56px;\n  max-height: 56px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid transparent;\n}\n\n.mat-input-container {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px;\n  margin-top: 8px;\n}\n\n.example-no-results {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 24px;\n  font-size: 12px;\n  font-style: italic;\n}\n\n/** Selection styles */\n.example-selection-header {\n  font-size: 18px;\n  background: rgba(255, 64, 129, 0.3);\n  border-bottom: 1px solid #d696ac;\n}\n\n.mat-column-select {\n  max-width: 54px;\n}\n\n.mat-row:hover, .example-selected-row {\n  background: #f5f5f5;\n}\n\n.mat-row:active, .mat-row.example-selected-row {\n  background: #eaeaea;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/patients/patients.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n    <mat-input-container floatPlaceholder=\"never\">\n      <input matInput #filter placeholder=\"Filter patients\">\n    </mat-input-container>\n  </div>\n  <div class=\"example-header example-selection-header\"\n       *ngIf=\"!selection.isEmpty()\">\n    {{selection.selected.length}}\n    {{selection.selected.length == 1 ? 'user' : 'users'}}\n    selected\n  </div>\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Checkbox Column -->\n    <ng-container cdkColumnDef=\"select\">\n      <mat-header-cell *cdkHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                     [checked]=\"isAllSelected()\"\n                     [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </mat-header-cell>\n      <mat-cell *cdkCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                     (change)=\"$event ? selection.toggle(row.id) : null\"\n                     [checked]=\"selection.isSelected(row.id)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n    <!-- ID Column -->\n    <ng-container cdkColumnDef=\"userId\">\n      <mat-header-cell *cdkHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *cdkCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container cdkColumnDef=\"progress\">\n      <mat-header-cell *cdkHeaderCellDef mat-sort-header> Progress </mat-header-cell>\n      <mat-cell *cdkCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"userName\">\n      <mat-header-cell *cdkHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *cdkCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <!-- Provider Column -->\n    <ng-container cdkColumnDef=\"provider\">\n      <mat-header-cell *cdkHeaderCellDef mat-sort-header> Provider </mat-header-cell>\n      <mat-cell *cdkCellDef=\"let row\"> {{row.provider}} </mat-cell>\n    </ng-container>\n\n\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"\n             [class.example-selected-row]=\"selection.isSelected(row.id)\"\n             (click)=\"selection.toggle(row.id)\">\n    </mat-row>\n  </mat-table>\n\n  <div class=\"example-no-results\"\n       [style.display]=\"dataSource?.renderedData.length == 0 ? '' : 'none'\">\n    No users found matching filter.\n  </div>\n\n  <mat-paginator #paginator \n                [length]=\"dataSource?.filteredData.length\"\n                [pageIndex]=\"0\"\n                [pageSize]=\"25\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/patients/patients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PatientsComponent = (function () {
    function PatientsComponent() {
        this.displayedColumns = ['select', 'userId', 'userName', 'progress', 'provider'];
        this.exampleDatabase = new ExampleDatabase();
        this.selection = new __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["b" /* SelectionModel */](true, []);
    }
    PatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        // Observable for the filter
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    PatientsComponent.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length == this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length == this.exampleDatabase.data.length;
        }
    };
    PatientsComponent.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { return _this.selection.select(data.id); });
        }
        else {
            this.exampleDatabase.data.forEach(function (data) { return _this.selection.select(data.id); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginator */])
    ], PatientsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSort */])
    ], PatientsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PatientsComponent.prototype, "filter", void 0);
    PatientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patients',
            template: __webpack_require__("../../../../../src/app/component/patients/patients.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/patients/patients.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], PatientsComponent);
    return PatientsComponent;
}());

/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
var PROVIDERS = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            provider: PROVIDERS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        _this.filteredData = [];
        _this.renderedData = [];
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            // Filter data
            _this.filteredData = _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            var sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    /** Returns a sorted copy of the database data. */
    ExampleDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'provider':
                    _d = [a.provider, b.provider], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["n" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/component/payment/payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.example-card {\n  width: 400px;\n}\n\n\n.payment{\n\tbackground-color: #33ccff;\n\tcolor: #FFFFFF;\n\ttext-align: center;\n}\n\nmat-card.payment-portal{\n\tdisplay: block;\n    margin-left: auto;\n    position: relative;\n\n    margin-top: 12em;\n    margin-right: auto\n}\n\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #33ccff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n\t\t<mat-card class=\"payment-portal example-container\">\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\tBilling\n\t\t\t\t</mat-card-subtitle>\n\t\t\t</mat-card-header>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<button mat-raised-button class=\"payment\" >Paypal</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput placeholder=\"Card Number\">\n\t\t\t</mat-form-field>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput placeholder=\"Expiration Date\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput placeholder=\"CVV\" [type]=\"hide ? 'password' : 'text'\">\n\t\t\t\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput placeholder=\"Postal Code\">\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<button mat-raised-button class=\"payment\">Submit</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t\n\n\t\t\t\n\t\t\t\n\t\t</mat-card>\n\t\t</div>\n\t\t<div class=\"col-md-6\"><br>\n\t\t\t<mat-card class=\"example-container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<table matSort (matSortChange)=\"sortData($event)\">\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <th mat-sort-header=\"name\">Date</th>\n\t\t\t\t\t\t    <th mat-sort-header=\"calories\">Payment Type</th>\n\t\t\t\t\t\t    <th mat-sort-header=\"amount\">Payment Amount</th>\n\t\t\t\t\t\t    <th mat-sort-header=\"fat\">Customer Name</th>\n\t\t\t\t\t\t    <th mat-sort-header=\"carbs\">Confirmation</th>\n\t\t\t\t\t\t    <th mat-sort-header=\"protein\">Balance</th>\n\t\t\t\t\t\t  </tr>\n\n\t\t\t\t\t\t  <tr *ngFor=\"let dessert of sortedData\">\n\t\t\t\t\t\t    <td>{{dessert.name}}</td>\n\t\t\t\t\t\t    <td>{{dessert.calories}}</td>\n\t\t\t\t\t\t    <td>{{dessert.amount}}</td>\n\t\t\t\t\t\t    <td>{{dessert.fat}}</td>\n\t\t\t\t\t\t    <td>{{dessert.carbs}}</td>\n\t\t\t\t\t\t    <td>{{dessert.protein}}</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = (function () {
    function PaymentComponent() {
        this.desserts = [
            { name: 'Frozen yogurt', amount: '1200', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', amount: '1700', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', amount: '2400', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', amount: '4500', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', amount: '3100', calories: '356', fat: '16', carbs: '49', protein: '4' },
            { name: 'Frozen yogurt', amount: '1200', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', amount: '1700', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', amount: '2400', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', amount: '4500', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', amount: '3100', calories: '356', fat: '16', carbs: '49', protein: '4' },
            { name: 'Frozen yogurt', amount: '1200', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', amount: '1700', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', amount: '2400', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', amount: '4500', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', amount: '3100', calories: '356', fat: '16', carbs: '49', protein: '4' },
            { name: 'Frozen yogurt', amount: '1200', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', amount: '1700', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', amount: '2400', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', amount: '4500', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', amount: '3100', calories: '356', fat: '16', carbs: '49', protein: '4' },
        ];
        this.sortedData = this.desserts.slice();
    }
    PaymentComponent.prototype.sortData = function (sort) {
        var data = this.desserts.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'amount': return compare(+a.amount, +b.amount, isAsc);
                case 'calories': return compare(+a.calories, +b.calories, isAsc);
                case 'fat': return compare(+a.fat, +b.fat, isAsc);
                case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
                case 'protein': return compare(+a.protein, +b.protein, isAsc);
                default: return 0;
            }
        });
    };
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__("../../../../../src/app/component/payment/payment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/payment/payment.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/component/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  side-bar works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__("../../../../../src/app/component/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/side-bar/side-bar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/summary/summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n\n    width: 12em; \n    height: 12em;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: 2em;\n    margin-right: 2em\n}\n\nbutton img {\n    height: 12em; \n    width: 12em; \n/*    min-width: 12em; \n    min-height: 12em;*/\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: 2em;\n    margin-right: 2em\n}\n\na img{\n\n/*  display: block;\n  min-height: 16em;\n  margin-left: 2em;\n    margin-right: 2em;\n    display: table-cell;*/\n    vertical-align: middle;\n\n}\n\n\nh5.label {\n     font-family: 'Montserrat Medium', sans-serif;\n     font-weight: 400;\n     font-size: 1em;\n     text-align: center;\n     margin-left: auto;\n     margin-right: auto;\n\n     width: 8em\n }\n\n div.container6 {\n  height: 10em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\"><br>\n\t\t\t<mat-card>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t\t<img mat-card-avatar src=\"assets/images/medical/009-pills-3.png\">\n\t\t\t\t\t\t\t<mat-card-title>\n\t\t\t\t\t\t\t\t<h5>George Will</h5>\n\t\t\t\t\t\t\t</mat-card-title>\n\t\t\t\t\t\t</mat-card-header>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Age: 45</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Code Status: 45</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">DOB: 45</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Sex: 45</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Dosing weight: 90.9 kg</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">MRN: 6272818</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Location: RM 234</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Last Visit: 01/12/17 - P</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Physician: Bill Adler, DO</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"patient_info\">Tags: A</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</mat-card>\n\t\t</div>\n\t</div><br>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<a mat-raised-button ><br>\n\t\t\t\t<img  src=\"assets/images/icons/cardiogram.svg\" alt=\"Random first slide\"><br>\n\t\t\t\t<h5 class=\"label\">Vitals</h5>\n\n\t\t\t</a>\n<!-- \t\t\t<mat-card class=\"example-card\">\n\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<img src=\"assets/images/icons/cardiogram.svg\" alt=\"Random first slide\">\n\t\t\t\t</mat-card-content>\n\t\t\t\t<mat-card-header>\n\n\t\t\t\t\t\t<h5 class=\"label\">Vitals</h5>\n\t\n\t\t\t\t</mat-card-header>\n\t\t\t</mat-card> -->\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<a mat-raised-button><br>\n\t\t\t\t<img  src=\"assets/images/icons/medical-records.svg\" alt=\"Random first slide\"><br>\n\t\t\t\t<h5 class=\"label\">Diagnoses</h5>\n\n\t\t\t</a>\n<!-- \t\t\t<mat-card>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<img src=\"assets/images/icons/medical-records.svg\" alt=\"Random first slide\">\n\t\t\t\t</mat-card-content>\n\t\t\t\t<mat-card-header>\n\t\t\t\t\t<h5 class=\"label\">Diagnoses</h5>\n\t\t\t\t</mat-card-header>\n\t\t\t</mat-card> -->\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<a mat-raised-button routerLink=\"/medications\"><br>\n\t\t\t\t<img  src=\"assets/images/icons/pills-1.svg\" alt=\"Random first slide\"><br>\n\t\t\t\t<h5 class=\"label\">Medications</h5>\n\n\t\t\t</a>\n\t\t\t\n<!-- \t\t\t<mat-card>\n\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<img src=\"assets/images/icons/pills-1.svg\" alt=\"Random first slide\">\n\t\t\t\t</mat-card-content>\n\t\t\t\t<mat-card-header>\n\n\t\t\t\t\t\t<h5 class=\"label\">Medications</h5>\n\n\t\t\t\t</mat-card-header>\n\n\t\t\t</mat-card> -->\n\t\t\t\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<a mat-raised-button routerLink=\"/charts\"><br>\n\t\t\t\t<img  src=\"assets/images/icons/lab.svg\" alt=\"Random first slide\"><br>\n\t\t\t\t<h5 class=\"label\">Labs / X-Rays</h5>\n\n\t\t\t</a>\n<!-- \t\t\t<mat-card>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<img mat-card-lg-image src=\"assets/images/icons/lab.svg\" alt=\"Random first slide\">\n\t\t\t\t</mat-card-content>\n\t\t\t\t<mat-card-header>\n\n\t\t\t\t\t\t<h5 class=\"label\">Labs / X-Rays</h5>\n\n\t\t\t\t</mat-card-header>\n\t\t\t</mat-card> -->\n\t\t</div>\n\t</div><br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<a mat-raised-button routerLink=\"/home\"><br>\n\t\t\t\t<img  src=\"assets/images/icons/timer.svg\" alt=\"Random first slide\"><br>\n\t\t\t\t<h5 class=\"label\">History</h5>\n\n\t\t\t</a>\n<!-- \t\t\t<mat-card>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<img mat-card-lg-image src=\"assets/images/icons/timer.svg\" alt=\"Random first slide\">\n\t\t\t\t</mat-card-content>\n\t\t\t\t<mat-card-header>\n\t\t\t\t\t<h5 class=\"label\">History</h5>\n\t\t\t\t</mat-card-header>\n\t\t\t</mat-card> -->\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<a mat-raised-button routerLink=\"/appointment\"><br>\n\t\t\t\t<img  src=\"assets/images/icons/calendar.svg\" alt=\"Random first slide\"><br>\n\t\t\t\t<h5 class=\"label\">Appointments</h5>\n\n\t\t\t</a>\n<!-- \t\t\t<mat-card>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<img mat-card-lg-image src=\"assets/images/icons/calendar.svg\" alt=\"Random first slide\">\n\t\t\t\t</mat-card-content>\n\t\t\t\t<mat-card-header>\n\t\t\t\t\t<h5 class=\"label\">Appointments</h5>\n\t\t\t\t</mat-card-header>\n\t\t\t</mat-card> -->\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<a mat-raised-button><br>\n\t\t\t\t<img  src=\"assets/images/icons/creditcard.svg\" alt=\"Random first slide\"><br>\n\t\t\t\t<h5 class=\"label\">Billing</h5>\n\n\t\t\t</a>\n<!-- \t\t\t<mat-card>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<img mat-card-lg-image src=\"assets/images/icons/creditcard.svg\" alt=\"Random first slide\">\n\t\t\t\t</mat-card-content>\n\t\t\t\t<mat-card-header>\n\n\t\t\t\t\t\t<h5 class=\"label\">Billing</h5>\n\n\t\t\t\t</mat-card-header>\n\t\t\t</mat-card> -->\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<a mat-raised-button><br>\n\t\t\t\t<img  src=\"assets/images/icons/document.svg\" alt=\"Random first slide\"><br>\n\t\t\t\t<h5 class=\"label\">Documents</h5>\n\n\t\t\t</a>\n<!-- \t\t\t<mat-card>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<img mat-card-lg-image src=\"assets/images/icons/document.svg\" alt=\"Random first slide\">\n\t\t\t\t</mat-card-content>\n\t\t\t\t<mat-card-header>\n\n\t\t\t\t\t\t<h5 class=\"label\">Documents</h5>\n\n\t\t\t\t</mat-card-header>\n\t\t\t</mat-card> -->\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryComponent = (function () {
    function SummaryComponent() {
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__("../../../../../src/app/component/summary/summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/summary/summary.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/brain/brain.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/brain/brain.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n \t<li>1/21/17\n \t\t<ul>\n    \t\t<li><p>Chest Pain.</p></li>\n    \t\t<li><p>paroxysmal nocturnal dyspnea </p></li>\n    \t</ul>\n \t</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/component/system-review/brain/brain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrainComponent = (function () {
    function BrainComponent() {
    }
    BrainComponent.prototype.ngOnInit = function () {
    };
    BrainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-brain',
            template: __webpack_require__("../../../../../src/app/component/system-review/brain/brain.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/brain/brain.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], BrainComponent);
    return BrainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/brain/new-brain.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/brain/new-brain.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containter-fluid\">\n<br>\n<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">chest pain</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">varicosities</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">thrombophlebitis</mat-checkbox>\n  <br>\n</section>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/system-review/brain/new-brain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBrainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewBrainComponent = (function () {
    function NewBrainComponent() {
    }
    NewBrainComponent.prototype.ngOnInit = function () {
    };
    NewBrainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-brain',
            template: __webpack_require__("../../../../../src/app/component/system-review/brain/new-brain.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/brain/new-brain.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NewBrainComponent);
    return NewBrainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/heart/heart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/heart/heart.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n \t<li>1/23/17\n \t\t<ul>\n    \t\t<li><p>Chest Pain.</p></li>\n    \t\t<li><p>paroxysmal nocturnal dyspnea </p></li>\n    \t</ul>\n \t</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/component/system-review/heart/heart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeartComponent = (function () {
    function HeartComponent() {
    }
    HeartComponent.prototype.ngOnInit = function () {
    };
    HeartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-heart',
            template: __webpack_require__("../../../../../src/app/component/system-review/heart/heart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/heart/heart.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HeartComponent);
    return HeartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/heart/new-heart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/heart/new-heart.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">chest pain</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">varicosities</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">thrombophlebitis</mat-checkbox>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/component/system-review/heart/new-heart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewHeartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewHeartComponent = (function () {
    function NewHeartComponent() {
    }
    NewHeartComponent.prototype.ngOnInit = function () {
    };
    NewHeartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-heart',
            template: __webpack_require__("../../../../../src/app/component/system-review/heart/new-heart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/heart/new-heart.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NewHeartComponent);
    return NewHeartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/kidneys/kidneys.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/kidneys/kidneys.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n \t<li>1/23/17\n \t\t<ul>\n    \t\t<li><p>pain on urination.</p></li>\n    \t\t<li><p>frequency</p></li>\n    \t</ul>\n \t</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/component/system-review/kidneys/kidneys.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidneysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KidneysComponent = (function () {
    function KidneysComponent() {
    }
    KidneysComponent.prototype.ngOnInit = function () {
    };
    KidneysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kidneys',
            template: __webpack_require__("../../../../../src/app/component/system-review/kidneys/kidneys.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/kidneys/kidneys.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], KidneysComponent);
    return KidneysComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/kidneys/new-kidneys.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/kidneys/new-kidneys.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">frequency</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">blood in urine</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">incontinence</mat-checkbox>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/component/system-review/kidneys/new-kidneys.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewKidneysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewKidneysComponent = (function () {
    function NewKidneysComponent() {
    }
    NewKidneysComponent.prototype.ngOnInit = function () {
    };
    NewKidneysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-kidneys',
            template: __webpack_require__("../../../../../src/app/component/system-review/kidneys/new-kidneys.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/kidneys/new-kidneys.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NewKidneysComponent);
    return NewKidneysComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/knee/knee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/knee/knee.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n \t<li>1/23/17\n \t\t<ul>\n    \t\t<li><p>athritis.</p></li>\n    \t\t<li><p>joint swelling </p></li>\n    \t</ul>\n \t</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/component/system-review/knee/knee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KneeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KneeComponent = (function () {
    function KneeComponent() {
    }
    KneeComponent.prototype.ngOnInit = function () {
    };
    KneeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-knee',
            template: __webpack_require__("../../../../../src/app/component/system-review/knee/knee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/knee/knee.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], KneeComponent);
    return KneeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/knee/new-knee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/knee/new-knee.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">athritis</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">joint swelling </mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">history of fractures</mat-checkbox>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/component/system-review/knee/new-knee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewKneeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewKneeComponent = (function () {
    function NewKneeComponent() {
    }
    NewKneeComponent.prototype.ngOnInit = function () {
    };
    NewKneeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-knee',
            template: __webpack_require__("../../../../../src/app/component/system-review/knee/new-knee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/knee/new-knee.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NewKneeComponent);
    return NewKneeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/lungs/lungs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/lungs/lungs.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n \t<li>1/23/17\n \t\t<ul>\n    \t\t<li><p>Cough.</p></li>\n    \t\t<li><p>Trouble breathing (dyspnea) </p></li>\n    \t</ul>\n \t</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/component/system-review/lungs/lungs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LungsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LungsComponent = (function () {
    function LungsComponent() {
    }
    LungsComponent.prototype.ngOnInit = function () {
    };
    LungsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lungs',
            template: __webpack_require__("../../../../../src/app/component/system-review/lungs/lungs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/lungs/lungs.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LungsComponent);
    return LungsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/lungs/new-lungs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/lungs/new-lungs.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">cough</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">recurrent pneumonia</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">trouble breathing (dyspnea)</mat-checkbox>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/component/system-review/lungs/new-lungs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLungsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewLungsComponent = (function () {
    function NewLungsComponent() {
    }
    NewLungsComponent.prototype.ngOnInit = function () {
    };
    NewLungsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-lungs',
            template: __webpack_require__("../../../../../src/app/component/system-review/lungs/new-lungs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/lungs/new-lungs.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NewLungsComponent);
    return NewLungsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/stomach/new-stomach.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/stomach/new-stomach.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">trouble swallowing </mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">nausea</mat-checkbox>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/component/system-review/stomach/new-stomach.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewStomachComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewStomachComponent = (function () {
    function NewStomachComponent() {
    }
    NewStomachComponent.prototype.ngOnInit = function () {
    };
    NewStomachComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-stomach',
            template: __webpack_require__("../../../../../src/app/component/system-review/stomach/new-stomach.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/stomach/new-stomach.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NewStomachComponent);
    return NewStomachComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/stomach/stomach.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/stomach/stomach.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n \t<li>1/23/17\n \t\t<ul>\n    \t\t<li><p>pain on urination.</p></li>\n    \t\t<li><p>frequency</p></li>\n    \t</ul>\n \t</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/component/system-review/stomach/stomach.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StomachComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StomachComponent = (function () {
    function StomachComponent() {
    }
    StomachComponent.prototype.ngOnInit = function () {
    };
    StomachComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stomach',
            template: __webpack_require__("../../../../../src/app/component/system-review/stomach/stomach.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/stomach/stomach.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], StomachComponent);
    return StomachComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/x-ray/new-x-ray.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/x-ray/new-x-ray.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/component/system-review/x-ray/new-x-ray.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewXRayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewXRayComponent = (function () {
    function NewXRayComponent() {
    }
    NewXRayComponent.prototype.ngOnInit = function () {
    };
    NewXRayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-x-ray',
            template: __webpack_require__("../../../../../src/app/component/system-review/x-ray/new-x-ray.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/x-ray/new-x-ray.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NewXRayComponent);
    return NewXRayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/system-review/x-ray/x-ray.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/system-review/x-ray/x-ray.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/component/system-review/x-ray/x-ray.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XRayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var XRayComponent = (function () {
    function XRayComponent() {
    }
    XRayComponent.prototype.ngOnInit = function () {
    };
    XRayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-x-ray',
            template: __webpack_require__("../../../../../src/app/component/system-review/x-ray/x-ray.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/system-review/x-ray/x-ray.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], XRayComponent);
    return XRayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/tasks/new-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/tasks/new-task.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  new-task works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/tasks/new-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewTaskComponent = (function () {
    function NewTaskComponent() {
    }
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__("../../../../../src/app/component/tasks/new-task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/tasks/new-task.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n<div class=\"row\">\n<div class=\"col-md-8\">\n<mat-card>\n\t<div class=\"row text-center\">\n\t  <div class=\"col-md-4\">\n\t    <div class=\"btn-group\">\n\t      <div\n\t        class=\"btn btn-primary\"\n\t        mwlCalendarPreviousView\n\t        [view]=\"view\"\n\t        [(viewDate)]=\"viewDate\"\n\t        (viewDateChange)=\"activeDayIsOpen = false\">\n\t        Previous\n\t      </div>\n\t      <div\n\t        class=\"btn btn-outline-secondary\"\n\t        mwlCalendarToday\n\t        [(viewDate)]=\"viewDate\">\n\t        Today\n\t      </div>\n\t      <div\n\t        class=\"btn btn-primary\"\n\t        mwlCalendarNextView\n\t        [view]=\"view\"\n\t        [(viewDate)]=\"viewDate\"\n\t        (viewDateChange)=\"activeDayIsOpen = false\">\n\t        Next\n\t      </div>\n\t    </div>\n\t  </div>\n\t  <div class=\"col-md-4\">\n\t    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n\t  </div>\n\t  <div class=\"col-md-4\">\n\t    <div class=\"btn-group\">\n\t      <div\n\t        class=\"btn btn-primary\"\n\t        (click)=\"view = 'month'\"\n\t        [class.active]=\"view === 'month'\">\n\t        Month\n\t      </div>\n\t      <div\n\t        class=\"btn btn-primary\"\n\t        (click)=\"view = 'week'\"\n\t        [class.active]=\"view === 'week'\">\n\t        Week\n\t      </div>\n\t      <div\n\t        class=\"btn btn-primary\"\n\t        (click)=\"view = 'day'\"\n\t        [class.active]=\"view === 'day'\">\n\t        Day\n\t      </div>\n\t    </div>\n\t  </div>\n\t</div>\n\t<br>\n\n\t<div [ngSwitch]=\"view\">\n\t\t<mwl-calendar-month-view\n\t\t\t*ngSwitchCase=\"'month'\"\n\t\t\t[viewDate]=\"viewDate\"\n\t\t\t[events]=\"events\"\n\t\t\t[activeDayIsOpen]=\"activeDayIsOpen\">\n\n\t\t</mwl-calendar-month-view>\n\t\t<mwl-calendar-week-view\n\t\t\t*ngSwitchCase=\"'week'\"\n\t\t\t[viewDate]=\"viewDate\"\n\t\t\t[events]=\"events\">\n\t\t</mwl-calendar-week-view>\n\t\t<mwl-calendar-day-view\n\t\t\t*ngSwitchCase=\"'day'\"\n\t\t\t[viewDate]=\"viewDate\"\n\t\t\t[events]=\"events\">\n\t\t</mwl-calendar-day-view>\n\t</div>\n\t</mat-card>\n</div>\n<div class=\"col-md-4\">\n\t<mat-card>\n\t<button\n\t    class=\"btn btn-primary pull-right\"\n\t    (click)=\"addEvent()\">\n\t    Add new\n\t  </button>\n\t<div>\n\t\t<div class=\"row\" (ngSubmit)=\"addEvent()\">\n\t\t\t\n\t\t\t\t<div class=\"col-md-6 form-group\">\n\n\t\t\t\t\n\t\t\t\t  <mat-form-field>\n\t\t\t\t    <input matInput type=\"text\"\n\t\t\t          [(ngModel)]=\"event.title\"\n\t\t\t          (keyup)=\"refresh.next()\">\n\t\t\t\t  </mat-form-field>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 form-group\">\n\t\t\t\t<br>\n\t\t\t\t  <mwl-demo-utils-date-time-picker\n\t\t\t          [(ngModel)]=\"event.start\"\n\t\t\t          (ngModelChange)=\"refresh.next()\"\n\t\t\t          placeholder=\"Not set\">\n\t\t\t        </mwl-demo-utils-date-time-picker><br>\n\n\t\t\t\t   <mwl-demo-utils-date-time-picker\n\t\t\t          [(ngModel)]=\"event.end\"\n\t\t\t          (ngModelChange)=\"refresh.next()\"\n\t\t\t          placeholder=\"Not set\">\n\t\t\t        </mwl-demo-utils-date-time-picker>\n\t\t\t    </div>\n\n\t\t\t    <button class=\"btn btn-primary pull-right\" type=\"submit\" >add event</button>\n\n\t   \t</div><br>\n\t</div>\n\t</mat-card>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var TasksComponent = (function () {
    function TasksComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.event = {
            title: 'New event',
            start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
            end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        };
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.events = [
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 1),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    TasksComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    TasksComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    };
    TasksComponent.prototype.addEvent = function () {
        this.events.push(this.event);
        this.refresh.next();
    };
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__("../../../../../src/app/component/tasks/tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/tasks/tasks.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map