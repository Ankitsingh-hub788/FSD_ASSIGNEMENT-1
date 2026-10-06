const EventEmitter = require("events");

class StudentManager extends EventEmitter {
    constructor() {
        super();
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
        this.emit("studentAdded", student);
    }

    removeStudent(id) {
        const student = this.students.find(s => s.id === id);

        if (student) {
            this.students = this.students.filter(s => s.id !== id);
            this.emit("studentRemoved", student);
        }
    }

    updateStudent(id, newName) {
        const student = this.students.find(s => s.id === id);

        if (student) {
            student.name = newName;
            this.emit("studentUpdated", student);
        }
    }
}

// Create StudentManager object
const manager = new StudentManager();

// Listeners
manager.on("studentAdded", (student) => {
    console.log("Student Added:", student);
});

manager.on("studentRemoved", (student) => {
    console.log("Student Removed:", student);
});

manager.on("studentUpdated", (student) => {
    console.log("Student Updated:", student);
});

// Testing
manager.addStudent({ id: 1, name: "Ankit" });

manager.updateStudent(1, "Rahul");

manager.removeStudent(1);