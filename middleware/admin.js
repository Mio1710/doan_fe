export default function ({ $auth, redirect }) {
  const user = $auth.user
  if (user.type === 'student') {
    return redirect('/student')
  }
  if (user.type === 'teacher') {
    return redirect('/teacher')
  }
}
