import express from 'express';

import { RequestValidation } from '../../middlewares/validateRequest';
import { ManagementDepartmentController } from './managementDepartment.controller';
import { ManagementDepartmentValidation } from './managementDepartment.validation';

const router = express.Router();

router.post(
  '/create-department',
  RequestValidation(
    ManagementDepartmentValidation.createManagementDepartmentZodSchema,
  ),
  ManagementDepartmentController.createDepartment,
);

router.get('/:id', ManagementDepartmentController.getSingleDepartment);

router.get('/', ManagementDepartmentController.getAllDepartments);

router.patch(
  '/:id',
  RequestValidation(
    ManagementDepartmentValidation.updateManagementDepartmentZodSchema,
  ),
  ManagementDepartmentController.updateDepartment,
);

router.delete('/:id', ManagementDepartmentController.deleteDepartment);

export const ManagementDepartmentRoutes = router;
