export default function ({ $auth, redirect }) {
  const user = $auth.user
  if (user.type === 'teacher') {
    return redirect('/teacher')
  }
  if (user.type === 'admin') {
    return redirect('/admin')
  }
}
