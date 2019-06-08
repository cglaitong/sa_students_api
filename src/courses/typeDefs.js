export const studentsTypeDef = `
type Student {
    code: Int!
    username: String!
    password: String!
}
input StudentInput{
    username: String!
    password: String!
}`;

export const studentQueries = `
    allStudents: [Student]!
    studentByCode(code: Int!): Student!
`;

export const studentsMutations = `
    createStudent(student: StudentInput!): Student!
    deleteStudent(code: Int!): Int
    updateStudent(code: Int!, student: StudentInput!): Student!
`;



/*

export const coursesTypeDef = `
type Course {
    name: String!
    credits: Int!
    professor: String!
}
input CourseInput {
    name: String!
    credits: Int!
    professor: String!
}`;

export const coursesQueries = `
    allCourses: [Course]!
    courseByCode(code: Int!): Course!
`;

export const coursesMutations = `
    createCourse(course: CourseInput!): Course!
    deleteCourse(code: Int!): Int
    updateCourse(code: Int!, course: CourseInput!): Course!
`;
*/
///////////////////

