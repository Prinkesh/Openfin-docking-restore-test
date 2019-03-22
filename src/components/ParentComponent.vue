<template>
  <div >
      <button v-on:click="save_workspace">Save Workspace</button>
      <button v-on:click="restore_workspace">Restore Workspace</button>
      <button v-on:click="create_child_window">Create Child</button>
  </div>
</template>

<script>
import * as Layouts from "openfin-layouts";

export default {
  created() {
    Layouts.workspaces.ready();
  },
  data() {
    return {
      childwindow_count: 0,
      childwindow_url: "/#/child"
    };
  },
  methods: {
    restore_workspace() {
      var laydata = JSON.parse(localStorage.getItem("WorkspaceData"));
      console.log("restoring layout", laydata);

      Layouts.workspaces.restore(laydata).then(result => {
        console.log("restored layout", result);
      });
    },
    async save_workspace() {
      const workspaceObj = await Layouts.workspaces.generate();
      localStorage.setItem("WorkspaceData", JSON.stringify(workspaceObj));
      console.log(workspaceObj);
    },
    create_child_window() {
      this.childwindow_count += 1;
      var window_options = {
        name: "childWindow_" + this.childwindow_count,
        url: this.childwindow_url,
        defaultHeight: 360,
        defaultWidth: 400,
        frame: true,
        autoShow: true,
        saveWindowState: true
      };

      var win = new fin.desktop.Window(
        window_options,
        function() {
          Layouts.register({ uuid: win.uuid, name: win.name });
          win.show();
          console.log("Spawned New Child Window", window_options);
        },
        function(err) {
          console.log("Error Creating Window", err, window_options);
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
