import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataSaverService {
  constructor() {}

  public save(object: any) {
    const list = this.getAll(object.constructor.name);
    const exist = list.some((e, i) => {
      if (e.id === object.id) {
        list[i] = object;
        return true;
      }
      return false;
    });
    localStorage.setItem(
      object.constructor.name,
      JSON.stringify(exist ? list : [...list, object])
    );
  }

  public getAll(object: any): Array<any> {
    return JSON.parse(localStorage.getItem(object)) || [];
  }

  public get(object: any) {
    const items = (
      JSON.parse(localStorage.getItem(object.constructor.name)) || []
    ).filter((e) => e.id === object.id);
    return items.length === 0 ? null : items[0];
  }
}
