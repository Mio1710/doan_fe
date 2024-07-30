export default function ({ $auth, redirect }) {
  const user = $auth.user
  if (user.type !== 'student' && user.type !== 'teacher') {
    return redirect('/admin/classes')
  }
}
