import express from 'express';

import { RequestValidation } from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-semester/',
  RequestValidation(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester,
);

router.get('/', AcademicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
