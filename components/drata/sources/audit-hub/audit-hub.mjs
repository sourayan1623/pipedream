import drata from "../../drata.app.mjs";
import { DEFAULT_POLLING_SOURCE_TIMER_INTERVAL } from "@pipedream/platform";

const docsLink = "";

export default {
  key: "drata-audit-hub",
  name: "Audit Hub",
  description: `Emit new event for a audit hub result. [See docs here.](${docsLink})`,
  type: "source",
  version: "0.0.1",
  dedupe: "unique",
  props: {
    drata,
    db: "$.service.db",
    timer: {
      type: "$.interface.timer",
      default: {
        intervalSeconds: DEFAULT_POLLING_SOURCE_TIMER_INTERVAL,
      },
    },
  },
  hooks: {
    async deploy() {},
  },
  methods: {},
  async run() {},
};
