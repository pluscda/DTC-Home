<template>
  <section class="top-section">
    <SideBar></SideBar>
    <img class="silderBtn" src="arrow-right.svg" @click="$root.$emit('open-sidebar')" style="cursor:pointer;" />
    <div class="dashboard6" id="list" v-if="type == 6">
      <div id="div1">1</div>
      <div id="div2">2</div>
      <div id="div3">3</div>
      <div id="div4">4</div>
      <div id="div5">5</div>
      <div id="div6">6</div>
    </div>
    <div class="dashboard4" id="list" v-if="type == 4">
      <div id="div1">1</div>
      <div id="div2">2</div>
      <div id="div3">3</div>
      <div id="div4">4</div>
    </div>
    <div class="dashboard" id="list" v-if="type == 1">
      <div class="one-only">
        <main class="main-person" v-for="(item, i) in persons" :key="i">
          <div>{{ keys[0] }} : {{ item.name }}</div>
          <div>{{ keys[1] }} : {{ item.birthday }}</div>
          <div>{{ keys[2] }} : {{ item.age }}</div>
          <div>{{ keys[3] }} : {{ item.bedNo }}</div>
          <div>{{ keys[4] }} : {{ item.id }}</div>
          <div>{{ keys[5] }} : {{ item.enrollDate }}</div>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import mousetrap from "mousetrap";
import SideBar from "./SideBar";
import faker from "faker";
faker.locale = "zh_TW";
const keys = ["名稱", "出生日期", "年齡", "床號", "病歷號", "入院日期"];
const persons = new Array(40).fill().map((s, i) => {
  var dob = faker.date.past(50, new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)"));
  dob = dob.getFullYear() + "-" + (dob.getMonth() + 1) + "-" + dob.getDate(); // First month is "1"
  var dob2 = faker.date.past(2, new Date("Sat Sep 20 2020 21:35:02 GMT+0200 (CEST)"));
  dob2 = dob2.getFullYear() + "-" + (dob2.getMonth() + 1) + "-" + dob2.getDate(); // First month is "1"
  let obj = {
    name: faker.name.findName(),
    birthday: dob,
    age: i + 1,
    bedNo: Date.now(),
    id: faker.phone.phoneNumber().split("-")[1],
    enrollDate: dob2,
  };
  return obj;
});
export default {
  name: "home",
  components: { SideBar },
  data() {
    return {
      items: ["a", "b", "c", "d"],
      type: 1,
      persons,
      keys,
    };
  },
  computed: {
    isLogin() {},
  },
  methods: {
    viewFullScreen() {
      var el = document.getElementById("list");
      el.requestFullscreen();
    },
    enableDnD() {
      function sortable(section, onUpdate) {
        var dragEl, nextEl, newPos, dragGhost;

        let oldPos = [...section.children].map((item) => {
          item.draggable = true;
          let pos = document.getElementById(item.id).getBoundingClientRect();
          return pos;
        });

        function _onDragOver(e) {
          e.preventDefault();
          e.dataTransfer.dropEffect = "move";

          var target = e.target;
          if (target && target !== dragEl && target.nodeName == "DIV") {
            if (target.classList.contains("inside")) {
              e.stopPropagation();
            } else {
              //getBoundinClientRect contains location-info about the element (relative to the viewport)
              var targetPos = target.getBoundingClientRect();
              //checking that dragEl is dragged over half the target y-axis or x-axis. (therefor the .5)
              var next =
                (e.clientY - targetPos.top) / (targetPos.bottom - targetPos.top) > 0.5 || (e.clientX - targetPos.left) / (targetPos.right - targetPos.left) > 0.5;

              section.insertBefore(dragEl, (next && target.nextSibling) || target);
            }
          }
        }

        function _onDragEnd(evt) {
          evt.preventDefault();
          newPos = [...section.children].map((child) => {
            let pos = document.getElementById(child.id).getBoundingClientRect();
            return pos;
          });
          dragEl.classList.remove("ghost");
          section.removeEventListener("dragover", _onDragOver, false);
          section.removeEventListener("dragend", _onDragEnd, false);

          nextEl !== dragEl.nextSibling ? onUpdate(dragEl) : false;
        }

        section.addEventListener("dragstart", function(e) {
          dragEl = e.target;
          nextEl = dragEl.nextSibling;
          e.dataTransfer.effectAllowed = "move";
          e.dataTransfer.setData("Text", dragEl.textContent);
          section.addEventListener("dragover", _onDragOver, false);
          section.addEventListener("dragend", _onDragEnd, false);

          setTimeout(function() {
            dragEl.classList.add("ghost");
          }, 0);
        });
      }

      sortable(document.getElementById("list"), function(item) {
        /* console.log(item); */
      });
    },
  },

  async mounted() {
    //this.enableDnD();
    mousetrap.bind("f4", () => {
      this.type = 4;
      requestAnimationFrame(() => this.enableDnD());
    });
    mousetrap.bind("f6", () => {
      this.type = 6;
      requestAnimationFrame(() => this.enableDnD());
    });
    mousetrap.bind("f1", () => {
      this.type = 1;
    });
    mousetrap.bind("f8", () => this.viewFullScreen());
  },
  async created() {},
};
</script>

<style lang="scss">
#list {
  background: var(--dark);
  max-height: 100vh;
  overflow-y: auto;
}
.dashboard6,
.dashboard4 {
  margin: 0px;
  padding: 10px;
  list-style: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row dense;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;

  > div {
    cursor: move;
    border: 1px solid black;
    font-size: 24px;
    color: black;
    background: white;
    border-radius: 10px;
  }
}

.dashboard4 {
  grid-template-columns: repeat(2, 1fr);
}

.ghost {
  border: 1px dashed #000;
  background-color: #fff;
}
.custom-drag-ghost {
  /* The original cloned element must not take place up in the page and must not be visible */
  position: absolute;
  top: -99999px;
  left: -99999px;
  /* Just for appearance */
  background-color: #edb458;
  border: 1px solid #e8871e;
}

.hidden-drag-ghost {
  opacity: 0;
}

.transition {
  transition: all 2s ease-out 0.5s;
  top: 0;
}

.dashboard {
  height: 100vh;
  .one-only {
    border: none;
    border-radius: 0;
    color: black;
  }
}
.one-only {
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  background: var(--dark);
  > main {
    background: white;
    height: 200px;
    font-size: 1rem;
    border: 1px solid black;
    color: var(--dark);
    padding: 4px;
    border-radius: 10px;
  }
}

.silderBtn {
  position: fixed;
  z-index: 9;
  left: 0;
  top: 12px;
  opacity: 0.7;
}
</style>
