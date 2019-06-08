import { generalRequest, getRequest } from '../utilities';
import {url_courses, port_courses, entryPoint_courses, url_student, port_student, entryPoint_student } from './server';

const URL_courses = `http://${url_courses}:${port_courses}/${entryPoint_courses}`;
const URL_students = `http://${url_student}:${port_student}/${entryPoint_student}`;

const resolvers = {
	Query: {
		allCourses: (_) =>
			getRequest(URL_courses, ''),
		courseByCode: (_, { code }) =>
			generalRequest(`${URL_courses}/${code}`, 'GET'),
		allStudents: (_) =>
			getRequest(URL_students, ''),
		studentByCode: (_, { code }) =>
			generalRequest(`${URL_students}/${code}`, 'GET'),
	},
	Mutation: {
		createCourse: (_, { course }) =>
			generalRequest(`${URL_courses}`, 'POST', course),
		updateCourse: (_, { code, course }) =>
			generalRequest(`${URL_courses}/${code}`, 'PUT', course),
		deleteCourse: (_, { code }) =>
			generalRequest(`${URL_courses}/${code}`, 'DELETE'),
		createStudent: (_, { student }) =>
			generalRequest(`${URL_students}`, 'POST', student),
		updateStudent: (_, { code, student }) =>
			generalRequest(`${URL_students}/${code}`, 'PUT', student),
		deleteStudent: (_, { code }) =>
			generalRequest(`${URL_students}/${code}`, 'DELETE')
	}
};

export default resolvers;
