export default function({ app, redirect }) {
  const { $auth } = app;

  if (!$auth.user) {
    localStorage.clear();
    return redirect("/");
  } else if (new Date() > $auth.user.expires * 1000) {
    $auth.logout();
    localStorage.clear();
    return redirect("/");
  }
}
