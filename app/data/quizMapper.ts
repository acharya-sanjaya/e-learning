const fileMapper = {
  "nec-1-1": () => import("~/data/nec/01/1"),
  "nec-1-2": () => import("~/data/nec/01/2"),
  "nec-1-3": () => import("~/data/nec/01/3"),
  "nec-1-4": () => import("~/data/nec/01/4"),
  "nec-1-5": () => import("~/data/nec/01/5"),
  "nec-1-6": () => import("~/data/nec/01/6"),

  "nec-2-1": () => import("~/data/nec/02/1"),
  "nec-2-2": () => import("~/data/nec/02/2"),
  "nec-2-3": () => import("~/data/nec/02/3"),
  "nec-2-4": () => import("~/data/nec/02/4"),
  "nec-2-5": () => import("~/data/nec/02/5"),
  "nec-2-6": () => import("~/data/nec/02/6"),

  "nec-3-1": () => import("~/data/nec/03/1"),
  "nec-3-2": () => import("~/data/nec/03/2"),
  "nec-3-3": () => import("~/data/nec/03/3"),
  "nec-3-4": () => import("~/data/nec/03/4"),
  "nec-3-5": () => import("~/data/nec/03/5"),
  "nec-3-6": () => import("~/data/nec/03/6"),

  "nec-4-1": () => import("~/data/nec/04/1"),
  "nec-4-2": () => import("~/data/nec/04/2"),
  "nec-4-3": () => import("~/data/nec/04/3"),
  "nec-4-4": () => import("~/data/nec/04/4"),
  "nec-4-5": () => import("~/data/nec/04/5"),
  "nec-4-6": () => import("~/data/nec/04/6"),

  "nec-5-1": () => import("~/data/nec/05/1"),
  "nec-5-2": () => import("~/data/nec/05/2"),
  "nec-5-3": () => import("~/data/nec/05/3"),
  "nec-5-4": () => import("~/data/nec/05/4"),
  "nec-5-5": () => import("~/data/nec/05/5"),
  "nec-5-6": () => import("~/data/nec/05/6"),

  "nec-6-1": () => import("~/data/nec/06/1"),
  "nec-6-2": () => import("~/data/nec/06/2"),
  "nec-6-3": () => import("~/data/nec/06/3"),
  "nec-6-4": () => import("~/data/nec/06/4"),
  "nec-6-5": () => import("~/data/nec/06/5"),
  "nec-6-6": () => import("~/data/nec/06/6"),

  "nec-7-1": () => import("~/data/nec/07/1"),
  "nec-7-2": () => import("~/data/nec/07/2"),
  "nec-7-3": () => import("~/data/nec/07/3"),
  "nec-7-4": () => import("~/data/nec/07/4"),
  "nec-7-5": () => import("~/data/nec/07/5"),
  "nec-7-6": () => import("~/data/nec/07/6"),

  "nec-8-1": () => import("~/data/nec/08/1"),
  "nec-8-2": () => import("~/data/nec/08/2"),
  "nec-8-3": () => import("~/data/nec/08/3"),
  "nec-8-4": () => import("~/data/nec/08/4"),
  "nec-8-5": () => import("~/data/nec/08/5"),
  "nec-8-6": () => import("~/data/nec/08/6"),

  "nec-9-1": () => import("~/data/nec/09/1"),
  "nec-9-2": () => import("~/data/nec/09/2"),
  "nec-9-3": () => import("~/data/nec/09/3"),
  "nec-9-4": () => import("~/data/nec/09/4"),
  "nec-9-5": () => import("~/data/nec/09/5"),
  "nec-9-6": () => import("~/data/nec/09/6"),

  "nec-10-1": () => import("~/data/nec/10/1"),
  "nec-10-2": () => import("~/data/nec/10/2"),
  "nec-10-3": () => import("~/data/nec/10/3"),
  "nec-10-4": () => import("~/data/nec/10/4"),
  "nec-10-5": () => import("~/data/nec/10/5"),
  "nec-10-6": () => import("~/data/nec/10/6"),
};
export type ValidPath = keyof typeof fileMapper;

export default fileMapper;
