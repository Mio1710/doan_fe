import type { menu } from '~/types/config'

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
    title: 'Sinh viên 2',
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

export const TeacherMenu: menu[] = [
  {
    title: 'Người dùng',
    icon: 'mdi-account',
    children: [
      {
        title: 'Danh sách sinh viên',
        icon: 'mdi-view-dashboard',
        to: '/student',
      },
      {
        title: 'Đăng ký đề tài (đồ án)',
        icon: 'mdi-view-dashboard',
        to: '/doan',
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
        icon: 'mdi-clipboard-list-check',
        to: '/student/history',
      },
    ],
  },
  {
    title: 'Người dùng',
    icon: 'mdi-account',
    children: [
      {
        title: 'Danh sách sinh viên',
        icon: 'mdi-view-dashboard',
        to: '/student',
      },
      {
        title: 'Đăng ký đề tài (đồ án)',
        icon: 'mdi-view-dashboard',
        to: '/doan',
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
        icon: 'mdi-clipboard-list-check',
        to: '/student/history',
      },
    ],
  },
]
