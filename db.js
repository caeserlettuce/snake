var settings = [
  {
    "label": "debug mode",
    "id": "bdg",
    "default": false,
    "enable": () => {
      show_debug = true;
      document.body.classList.add("debugmode");
    },
    "disable": () => {
      show_debug = false;
      document.body.classList.remove("debugmode");
    }
  },
 
]

var customs = [
  {
    "label": "board width",
    "id": "bw",
    "fillvalue": (id_tm) => {
      if (setting_choices["customs"]) {
        if (setting_choices["customs"][id_tm]) {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = setting_choices["customs"][id_tm];
        } else {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = board_width;
        }
      }
    },
    "onchange": (value) => {
      console.log(value);
      board_width = value;
    },
    "getvalue": () => {
      return board_width;
    }
  },
  {
    "label": "board height",
    "id": "bh",
    "fillvalue": (id_tm) => {
      if (setting_choices["customs"]) {
        if (setting_choices["customs"][id_tm]) {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = setting_choices["customs"][id_tm];
        } else {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = board_height; // CHANGE THIS WHEN COPYING!!!
        }
      }
    },
    "onchange": (value) => {
      console.log(value);
      board_height = value; // CHANGE THIS WHEN COPYING!!!
    },
    "getvalue": () => {
      return board_height; // CHANGE THIS WHEN COPYING!!!
    }
  },
  {
    "label": "side size",
    "id": "ss",
    "fillvalue": (id_tm) => {
      if (setting_choices["customs"]) {
        if (setting_choices["customs"][id_tm]) {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = setting_choices["customs"][id_tm];
        } else {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = side_size; // CHANGE THIS WHEN COPYING!!!
        }
      }
    },
    "onchange": (value) => {
      console.log(value);
      side_size = value; // CHANGE THIS WHEN COPYING!!!
    },
    "getvalue": () => {
      return side_size; // CHANGE THIS WHEN COPYING!!!
    }
  },
  {
    "label": "next piece height",
    "id": "nph",
    "fillvalue": (id_tm) => {
      if (setting_choices["customs"]) {
        if (setting_choices["customs"][id_tm]) {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = setting_choices["customs"][id_tm];
        } else {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = next_height; // CHANGE THIS WHEN COPYING!!!
        }
      }
    },
    "onchange": (value) => {
      console.log(value);
      next_height = value; // CHANGE THIS WHEN COPYING!!!
    },
    "getvalue": () => {
      return next_height; // CHANGE THIS WHEN COPYING!!!
    }
  },
  {
    "label": "next piece amount",
    "id": "npa",
    "fillvalue": (id_tm) => {
      if (setting_choices["customs"]) {
        if (setting_choices["customs"][id_tm]) {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = setting_choices["customs"][id_tm];
        } else {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = next_amount; // CHANGE THIS WHEN COPYING!!!
        }
      }
    },
    "onchange": (value) => {
      console.log(value);
      next_amount = value; // CHANGE THIS WHEN COPYING!!!
    },
    "getvalue": () => {
      return next_amount; // CHANGE THIS WHEN COPYING!!!
    }
  },
  {
    "label": "start speed (ms)",
    "id": "stsp",
    "fillvalue": (id_tm) => {
      if (setting_choices["customs"]) {
        if (setting_choices["customs"][id_tm]) {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = setting_choices["customs"][id_tm];
        } else {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = start_speed; // CHANGE THIS WHEN COPYING!!!
        }
      }
    },
    "onchange": (value) => {
      console.log(value);
      start_speed = value; // CHANGE THIS WHEN COPYING!!!
    },
    "getvalue": () => {
      return start_speed; // CHANGE THIS WHEN COPYING!!!
    }
  },
  {
    "label": "speed increase",
    "id": "spin",
    "fillvalue": (id_tm) => {
      if (setting_choices["customs"]) {
        if (setting_choices["customs"][id_tm]) {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = setting_choices["customs"][id_tm];
        } else {
          document.querySelector(`.value input[idtm="${id_tm}"]`).value = speed_increase; // CHANGE THIS WHEN COPYING!!!
        }
      }
    },
    "onchange": (value) => {
      console.log(value);
      speed_increase = value; // CHANGE THIS WHEN COPYING!!!
    },
    "getvalue": () => {
      return speed_increase; // CHANGE THIS WHEN COPYING!!!
    }
  }
]

var funny_keys = [37, 38, 39, 40]

