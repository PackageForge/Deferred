import { Component } from '@angular/core';
import { Deferred } from 'projects/deferred/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deferred';
  constructor() {

    const a = new Deferred();
    a.resolve();          //OK
    a.resolve(undefined); //OK
    a.resolve(0);         //OK
    a.resolve("asdf");    //OK
    a.resolve(null);      //OK
    a.promise             //promise: Promise<any>
      .then(value => {    //value: any
      });

    const b = new Deferred<undefined>();
    b.resolve();          //OK
    b.resolve(undefined); //OK
    b.resolve(0);         //Error as expected
    b.resolve("asdf");    //Error as expected
    a.resolve(null);      //NOT ERRORING AS EXPECTED!!!!!
    b.promise             //promise: Promise<undefined>
      .then(value => {    //value: undefined
      });

    const c = new Deferred<string>();
    c.resolve();          //Error as expected
    c.resolve(undefined); //Error as expected
    c.resolve(0);         //Error as expected
    c.resolve("asdf");    //OK
    c.resolve("a", "a");  //Error as expected
    a.resolve(null);      //NOT ERRORING AS EXPECTED!!!!!
    c.promise             //promise: Promise<string>
      .then(value => {    //value: string
      });

    const d = new Deferred<number>();
    d.resolve();          //Error as expected
    d.resolve(undefined); //Error as expected
    d.resolve(0);         //OK
    d.resolve("asdf");    //Error as expected
    a.resolve(null);      //NOT ERRORING AS EXPECTED!!!!!
    d.promise             //promise: Promise<number>
      .then(value => {    //value: number
      });

    const e = new Deferred<any>();
    e.resolve();          //OK
    e.resolve(undefined); //OK
    e.resolve(0);         //OK
    e.resolve("asdf");    //OK
    a.resolve(null);      //OK
    e.promise             //promise: Promise<any>
      .then(value => {    //value: any
      });

    const f = new Deferred<null>();
    f.resolve();          //Error as expected
    f.resolve(undefined); //Error as expected
    f.resolve(0);         //Error as expected
    f.resolve("asdf");    //Error as expected
    f.resolve(null);      //OK
    f.promise             //promise: Promise<null>
      .then(value => {    //value: null
      });

    Deferred.resolve()
      .promise            //promise: Promise<undefined>
      .then(value => {    //value: undefined
      });

    Deferred.resolve(0)
      .promise            //promise: Promise<number>
      .then(value => {    //value: number
      });

    Deferred.reject(0)
      .promise            //promise: Promise<any>
      .then(value => {    //value: any
      }, reason => {      //reason: any
      });

    Deferred.reject<string>(0)
      .promise            //promise: Promise<string>
      .then(value => {    //value: string
      }, reason => {      //reason: any
      });
  }
}
