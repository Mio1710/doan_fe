import useGetUsers from '@/composables/use-get-user'
import useGetDeliveryMethods from '@/composables/use-get-delivery-method'
import useGetOrders from '@/composables/use-get-order'
import useGetProds from '@/composables/use-get-prod'
import useGetCategories from '@/composables/use-get-category'
import useGetBrands from '@/composables/use-get-brand'
import useGetCarts from '@/composables/use-get-cart'
import useGetPaymentMethods from '@/composables/use-get-payment-method'
import useGetClassrooms from '~/composables/use-get-classroom'
import useGetFaculties from '~/composables/use-get-faculty'
import useGetTeachers from '~/composables/use-get-teacher'
import useGetStudents from '~/composables/use-get-student'
import useGetMyCompany from '~/composables/students/use-get-my-company'
import useGetFiles from '~/composables/students/use-get-file'
import useGetCurrentStudents from '~/composables/teachers/use-get-current-students'
import useGetStudentFiles from '~/composables/students/use-get-student-file'
import useGetStudentCompany from '~/composables/students/use-get-student-company'

export {
  useGetUsers,
  useGetDeliveryMethods,
  useGetProds,
  useGetCategories,
  useGetBrands,
  useGetOrders,
  useGetCarts,
  useGetPaymentMethods,
  useGetClassrooms,
  useGetFaculties,
  useGetTeachers,
  useGetStudents,
  useGetMyCompany,
  useGetFiles,
  useGetCurrentStudents,
  useGetStudentFiles,
  useGetStudentCompany
}
