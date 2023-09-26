import express from 'express';

import { RequestValidation } from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidaion } from './student.validation';

const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);

router.get('/', StudentController.getAllStudents);

router.patch(
  '/:id',
  RequestValidation(StudentValidaion.updateStudentZodSchema),
  StudentController.updateStudent,
);

router.delete('/:id', StudentController.deleteStudent);

export const StudentRoutes = router;
