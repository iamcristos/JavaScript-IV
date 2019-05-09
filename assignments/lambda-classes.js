// CODE here for your Lambda Classes
class Personel {
    constructor(name, age, location, gender, catchPhrase) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
        this.catchPhrase = catchPhrase;
    }
};


/**
 * 
 * 
 * @class Students
 * @extends {Personel}
 */
class Students extends Personel {
    constructor (name, age, location, gender, catchPhrase, courseTrack, courseDuration) {
        super(name, age, location, gender, catchPhrase);
        this.courseTrack = courseTrack;
        this.courseDuration = courseDuration
    }


    /**
     * 
     * 
     * @returns a string with students information
     * 
     * @memberOf Students
     */
    studentInfo () {
        return (`${this.name} is ${this.age} a ${this.gender} from ${this.location}
        currently spent ${this.courseDuration} learning ${this.courseTrack}`)
    }
}


/**
 * 
 * 
 * @class Instructor
 * @extends {Personel}
 */
class Instructor extends Personel {
    constructor (name, age, location, gender, catchPhrase, specialty, role){
        super (name, age, location, gender, catchPhrase);
        this.specialty = specialty;
        this.role = role;
    }


    /**
     * 
     * 
     * @returns a string of instructors info
     * 
     * @memberOf Instructor
     */
    instructorInfo () {
        return (`${this.name} is ${this.age} a ${this.gender} from ${this.location}
        currently a ${this.specialty} ${this.role} and has these phrase
        ${this.catchPhrase}`)
    }
}


/**
 * 
 * 
 * @class ProjectManagers
 * @extends {Instructor}
 */
class ProjectManagers extends Instructor{
    constructor (name, age, location, gender, catchPhrase, specialty, role, noOfStudents){
        super (name, age, location, gender, catchPhrase, specialty, role);
        this.noOfStudents = noOfStudents;
    }


    /**
     * 
     * 
     * @returns a string with no of students 
     * 
     * @memberOf ProjectManagers
     */
    studentsAttached () {
        return (`${this.name} is managing ${this.noOfStudents} students`);
    }
}