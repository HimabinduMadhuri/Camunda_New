class FullName{
    firstName:string;
    lastName:string;
}

class Role{
    r1:string;
    r2:string;
    r3:string;
}

class Country{
    name:string;
    code:string;
}

export class Profile {
    constructor(
        public name:string,
        public role:string,
        public country:string,
        public lob:string
    ){}
}
