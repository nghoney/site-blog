export class BlogPost {
    status: string[];
    _id: string;
    content: string;
    title: string;
    author: string;
    CreatedDate: string;

  // assign vals from json to properties
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
