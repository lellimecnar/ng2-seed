import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';
import {bootstrap} from 'angular/angular2';
import {routerInjectables} from 'angular/router';
import {App} from './components/app/app';

bootstrap(App, [routerInjectables]);
