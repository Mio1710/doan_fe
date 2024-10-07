import type { menu } from '~/types/config'
export const SuperAdminMenu: menu = {
  title: 'Quản trị hệ thống',
  icon: 'mdi-account',
  children: [
    {
      title: 'Quản lý khoa',
      icon: 'mdi-list-box-outline',
      to: '/admin/super/faculty',
    },
  ],
}
export const StudentMenu: menu[] = [
  {
    id: 1,
    title: 'Sinh viên',
    icon: 'mdi-account',
    children: [
      {
        title: 'Đăng ký đề tài (đồ án)',
        icon: 'mdi-view-dashboard',
        to: '/student',
      },
      {
        title: 'Đăng ký công ty thực tập',
        icon: 'mdi-account',
        to: '/student/company',
      },
      {
        title: 'Kết quả chấm từ GVHD',
        icon: 'mdi-book',
        to: '/student/result',
      },
      {
        title: 'Xem ghi chú từ GVHD',
        icon: 'mdi-clipboard-list',
        to: '/student/note',
      },
      {
        title: 'Xem lịch sử làm K.luận',
        icon: 'mdi-clock-edit-outline',
        to: '/student/history',
      },
    ],
  },
  {
    id: 2,
    title: 'Menu 2',
    icon: 'mdi-account',
    children: [
      {
        title: 'Đăng ký đề tài (đồ án)1',
        icon: 'mdi-view-dashboard',
        to: '/student/1',
      },
      {
        title: 'Đăng ký công ty thực tập1',
        icon: 'mdi-account',
        to: '/student/2',
      },
      {
        title: 'Kết quả chấm từ GVHD1',
        icon: 'mdi-book',
        to: '/student/3',
      },
      {
        title: 'Xem ghi chú từ GVHD1',
        icon: 'mdi-clipboard-list',
        to: '/student/4',
      },
      {
        title: 'Xem lịch sử làm K.luận1',
        icon: 'mdi-clock-edit-outline',
        to: '/student/5',
      },
    ],
  },
]

export const TeacherMenu: menu = {
  title: 'Giảng viên',
  icon: 'mdi-account',
  children: [
    {
      title: 'Danh sách đăng ký',
      icon: 'mdi-list-box-outline',
      to: '/admin/teacher',
    },
    {
      title: 'Nhập điểm hướng dẫn',
      icon: 'mdi-view-dashboard',
      to: '/admin/teacher/guide-point',
    },
    {
      title: 'Nhập điểm phản biện',
      icon: 'mdi-account',
      to: '/admin/teacher/review-point',
    },
    {
      title: 'Cập nhật đề tài',
      icon: 'mdi-book',
      to: '/admin/teacher/topic',
    },
  ],
}

export const SuperTeacherMenu: menu = {
  title: 'Bộ môn',
  icon: 'mdi-account',
  children: [
    {
      title: 'Toàn danh sách đăng ký',
      icon: 'mdi-view-dashboard',
      to: 'admin/subject/student',
    },
    {
      title: 'Duyệt đề tài',
      icon: 'mdi-view-dashboard',
      to: '/admin/subject/topic',
    },
    {
      title: 'Phân GV phản biện',
      icon: 'mdi-account',
      to: '/admin/subject/teacher',
    },
    {
      title: 'Danh sách đăng ký thực tập',
      icon: 'mdi-book',
      to: '/admin/subject/company',
    },
  ],
}
export const AdminMenu: menu = {
  title: 'Khoa',
  icon: 'mdi-account',
  children: [
    {
      title: 'Bảng điều khiển',
      icon: 'mdi-view-dashboard',
      to: '/admin/faculty',
    },
    {
      title: 'Quản lý sinh viên thực tập',
      icon: 'mdi-view-dashboard',
      to: '/admin/faculty/student-company',
    },
    {
      title: 'Quản lý sinh viên khóa luận',
      icon: 'mdi-view-dashboard',
      to: '/admin/faculty/student-topic',
    },
    {
      title: 'Xuất file excel',
      icon: 'mdi-account',
      to: '/admin/faculty/excel',
    },
    {
      title: 'Tạo đợt đăng ký mới',
      icon: 'mdi-book',
      to: '/admin/faculty/semester',
    },
    {
      title: 'Quản lý giảng viên',
      icon: 'mdi-clipboard-list',
      to: '/admin/faculty/teacher',
    },
    {
      title: 'Reset đề tài',
      icon: 'mdi-clock-edit-outline',
      to: '/admin/faculty/reset-topic',
    },
    {
      title: 'Reset công ty',
      icon: 'mdi-clock-end',
      to: '/admin/faculty/reset-company',
    },
    {
      title: 'Reset password sv',
      icon: 'mdi-clock-fast',
      to: '/admin/faculty/reset-password',
    },
    {
      title: 'Chỉnh sửa LO',
      icon: 'mdi-clock-out',
      to: '/admin/faculty/lo',
    },
    {
      title: 'Xóa điểm cho SV',
      icon: 'mdi-clock-start',
      to: '/admin/faculty/delete-point',
    },
    {
      title: 'Chuyển GVHD',
      icon: 'mdi-clock-time-nine',
      to: '/admin/faculty/move-teacher',
    },
  ],
}
