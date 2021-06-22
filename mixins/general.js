export default {
  data() {
    return {
      fileTitle: {
        "initial-participant.csv": "Participant_Initial_Assessment.csv",
        "initial-clinician.csv": "Clinician_Initial_Assessment.csv",
        "initial-combined.csv":
          "Participant_AND_Clinician_Initial_Assessment.csv",
        "reassessment-clinician.csv": "Clinician_Reassessment.csv",
        "reassessment-participant.csv": "Participant_Reassessment.csv",
        "reassessment-combined.csv":
          "Participant_AND_Clinician_Reassessment.csv"
      }
    };
  },
  methods: {
    canDownloadClinPartCSV() {
      if (!this.$store.state.auth.user) return false;

      return (
        this.$store.state.auth.user.permissions.includes(
          "assessments.participantRecords.generateCsv"
        ) &&
        this.$store.state.auth.user.permissions.includes(
          "assessments.clinicianRecords.generateCsv"
        )
      );
    },
    displayFileName(fileName) {
      let splitName = fileName.split("/");
      return this.fileTitle[`${splitName[2]}`] || fileName;
    },
    displayFileDate(fileName) {
      let splitName = fileName.split("/");
      return splitName;
    }
  }
};
