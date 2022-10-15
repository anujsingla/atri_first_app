import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Link4": {
      "custom": {
        "text": "CFP Guru",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link5": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Link6": {
      "custom": {
        "text": "Form",
        "url": "/cfpform"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/cfpform"
            }
          }
        ]
      }
    },
    "Link7": {
      "custom": {
        "text": "About",
        "url": "/aboutus"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/aboutus"
            }
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Create killer conference submissions in minutes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "Start"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/cfpform"
            }
          }
        ]
      }
    },
    "Carousel1": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "CFP GURU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "aboutus": {
    "Flex9": {
      "callbacks": {}
    },
    "Flex28": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "TextBox4": {
      "custom": {
        "text": "We have collected all the wisdom from the internet on how to create wonderful conference submissions and put that into an intuitive form. CFP Guru helps you structure your idea into a winning format."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Need more help? Set up a free mentorship session with an expert"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "Find Slots"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link21": {
      "custom": {
        "text": "About",
        "url": "/aboutus"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/aboutus"
            }
          }
        ]
      }
    },
    "Link22": {
      "custom": {
        "text": "Form",
        "url": "/cfpform"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/cfpform"
            }
          }
        ]
      }
    },
    "Link23": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Link24": {
      "custom": {
        "text": "CFP Guru",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "cfpform": {
    "Flex10": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Div1": {
      "callbacks": {}
    },
    "Div2": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Div3": {
      "callbacks": {}
    },
    "Div4": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Div5": {
      "callbacks": {}
    },
    "Div6": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Div8": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Flex29": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "TextBox6": {
      "custom": {
        "text": "Abstract generator"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "What kind of conference is this?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input3": {
      "custom": {
        "value": "",
        "placeholder": "Placeholder Text"
      },
      "callbacks": {}
    },
    "Input4": {
      "custom": {
        "value": "",
        "placeholder": "Placeholder Text"
      },
      "callbacks": {}
    },
    "TextBox8": {
      "custom": {
        "text": "Describe the average organizer/jury committee member for this conf?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "Describe the problem that your submission tries to address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "custom": {
        "value": "",
        "placeholder": "Placeholder Text"
      },
      "callbacks": {}
    },
    "Button3": {
      "custom": {
        "text": "Cancel"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link25": {
      "custom": {
        "text": "About",
        "url": "/aboutus"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/aboutus"
            }
          }
        ]
      }
    },
    "Link26": {
      "custom": {
        "text": "Form",
        "url": "/cfpform"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/cfpform"
            }
          }
        ]
      }
    },
    "Link27": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Link28": {
      "custom": {
        "text": "CFP Guru",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
