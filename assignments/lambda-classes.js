// CODE here for your Lambda Classes
class Person {
    constructor(name, age, location, gender) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }

    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
};


/**
 * 
 * 
 * @class Students
 * @extends {Person}
 */
class Students extends Person {
    constructor (name, age, location, gender, previouBackground, className, favSubjects) {
        super(name, age, location, gender, catchPhrase);
        this.previouBackground = previouBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }


    /**
     * 
     * 
     * @returns a string listing students favorite subject one by one
     * 
     * @memberOf Students
     */
    listsSubjects () {
        return this.favSubjects.forEach((favSubject, i) => `${i}: ${favSubject};`)
    }


    /**
     * 
     * 
     * @param {any} subject 
     * @returns student PR on a subject
     * 
     * @memberOf Students
     */
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }


    /**
     * 
     * 
     * @param {any} subject 
     * @returns sprint challange a student starts
     * 
     * @memberOf Students
     */
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challange on ${subject}`;
    }
}


/**
 * 
 * 
 * @class Instructor
 * @extends {Person}
 */
class Instructor extends Person {
    constructor (name, age, location, gender, catchPhrase, specialty){
        super (name, age, location, gender);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }


    /**
     * 
     * 
     * @returns a string of learning subject
     * 
     * @memberOf Instructor
     */
    demo (subject) {
        return `Today we are learning about ${subject}`;
    }


    /**
     * 
     * 
     * @param {any} student 
     * @param {any} subject 
     * @returns a tring of each students name with a perfect score on a subject
     * 
     * @memberOf Instructor
     */
    grade (student, subject) {
       return student.forEach(student => `${student.name} recieves a perfect score on ${subject}`)
    }
}


/**
 * 
 * 
 * @class ProjectManagers
 * @extends {Instructor}
 */
class ProjectManagers extends Instructor{
    constructor(name, age, location, gender, catchPhrase, specialty, gradClassName, favInstructor) {
        super (name, age, location, gender, catchPhrase, specialty);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor
    }


    /**
     * 
     * 
     * @returns a reminder for standup
     * 
     * @memberOf ProjectManagers
     */
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times`;
    }

    debugsCode (student, subject) {
        return student.forEach(student => `${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

