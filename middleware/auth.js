export default function({ app, redirect }) {
  const { $auth } = app;

  if (
    !$auth.user ||
    !(
      $auth.user.permissions.includes(
        "assessments.participantRecords.generateCsv"
      ) &&
      $auth.user.permissions.includes(
        "assessments.clinicianRecords.generateCsv"
      )
    )
  ) {
    $auth.logout();
    localStorage.clear();
    return redirect("/");
  } else if (new Date() > $auth.user.expires * 1000) {
    $auth.logout();
    localStorage.clear();
    return redirect("/");
  }
}
