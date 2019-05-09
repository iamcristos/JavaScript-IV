// CODE here for your Lambda Classes
class Person {
    constructor({name, age, location, gender}) {
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
 * @class Instructor
 * @extends {Person}
 */
class Instructor extends Person {
    constructor ({name, age, location, gender, specialty,favLanguage, catchPhrase}){
        super ({name, age, location, gender});
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }


    /**
     * @returns a string of learning subject
     * @memberOf Instructor
     */
    demo (subject) {
        return `Today we are learning about ${subject}`;
    }


    /**
     * @param {any} student 
     * @param {any} subject 
     * @returns a tring of each students name with a perfect score on a subject
     * @memberOf Instructor
     */
    grade (student, subject) {
       return `${student.name} recieves a perfect score on ${subject}`;
    }

    points (max) {
        let studentGrade = Math.floor(Math.random() * Math.floor(max))
        if (studentGrade <=75) {
           return studentGrade += Math.random() * 10
        } else {
           return studentGrade -= Math.random() * 1.3
        }
    }

}

/**
 * @class Students
 * @extends {Person}
 */
class Students extends Person {
    constructor ({name, age, location, gender, previouBackground, className,favSubjects}) {
        super({name, age, location, gender});
        this.previouBackground = previouBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = Math.floor(Math.random() * Math.floor(100));
    }


    /**
     * @returns a string listing students favorite subject one by one
     * @memberOf Students
     */
    listsSubjects () {
        return this.favSubjects.forEach((favSubject, i) => console.log(`${i+1}: ${favSubject};`));
    }


    /**
     * @param {any} subject 
     * @returns student PR on a subject
     * @memberOf Students
     */
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }


    /**
     * @param {any} subject 
     * @returns sprint challange a student starts
     * @memberOf Students
     */
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challange on ${subject}`;
    }

    graduate (instructor) {
        if (this.grade >= 70) {
            return `congratulations ${this.name} you have graduated.`
        } else {
                let i = 0;
                while(i<1) {
                    i++
                    instructor.points(75);
                    if (this.grade >= 70) {
                        return `congratulations ${this.name} you have graduated.`
                    } else {
                        return `${this.name} cannot graduate`
                    }
                }
            } 
        }
}

/**
 * @class ProjectManagers
 * @extends {Instructor}
 */
class ProjectManagers extends Instructor{
    constructor({name, age, location, gender, catchPhrase, specialty, gradClassName, favInstructor}) {
        super ({name, age, location, gender, catchPhrase, specialty});
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor
    }


    /**
     * @returns a reminder for standup
     * @memberOf ProjectManagers
     */
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times`;
    }

    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
  });

  console.log(fred.demo('javascript'))
  
  const damola = new Students({
    name: 'Damola',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favSubjects: ['JavaScript','Html', 'CSS'],
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
    // grade: 50
  });
  console.log(fred.points(100))
  console.log(fred.grade(damola,'java'))
  console.log(damola.graduate(fred))
  console.log(damola.listsSubjects())
  console.log(damola.sprintChallenge('java'))
  

  