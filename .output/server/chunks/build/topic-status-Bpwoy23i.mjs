const filters = {
  statusColor(type) {
    switch (type) {
      case "pending":
        return "info";
      case "approved":
        return "success";
      case "rejected":
        return "error";
      default:
        return "#ccc";
    }
  },
  statusType(type) {
    switch (type) {
      case "pending":
        return "Ch\u1EDD duy\u1EC7t";
      case "approved":
        return "\u0110\xE3 duy\u1EC7t";
      case "rejected":
        return "T\u1EEB ch\u1ED1i";
      default:
        return "Ch\u1EDD duy\u1EC7t";
    }
  }
};

export { filters as f };
//# sourceMappingURL=topic-status-Bpwoy23i.mjs.map
