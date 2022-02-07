const emojipedia = [
    {
      id: 1,
      number:1,
      post: "CEO design",
      title:"Sahil Gaikwad",
      image:"https://s3-alpha-sig.figma.com/img/684b/7fa8/0e545bff79c0a15255cd7da662badb92?Expires=1644192000&Signature=TUUJKykPmm3kSFIMVTrmRULt3NU02spYU55UharWEPOXOre4ISVJbNhWS5Tc41GrQTDZ3Tc6GiWV1AWcb2FYa0lq8iZgMDXHDk5olmbIQGz-aMWHg73caGO9AFd~UJXVMN2rtbCyWaAVknjxYC78dyJwI~gWe8~3WInVrwQFhFBgbnH1MERsPKfh-gzpyGJwwA4DunKj~nj3mksVLmazocUpDAUpXynF1UmK8gDUvo6KuIaAWuZBQAQZKq2sFQdmsG9r0rKFXeuTSsCMNXlneH8z71pCdWw0IGlXgFmIzNDBczC~jAp4skV0A2JKXfRvB0vdwurURGyQhU~RKkIbaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      id: 2,
      number:2,
      post: "CEO design",
      title:"Sahil Gaikwad",
      image:"https://s3-alpha-sig.figma.com/img/684b/7fa8/0e545bff79c0a15255cd7da662badb92?Expires=1644192000&Signature=TUUJKykPmm3kSFIMVTrmRULt3NU02spYU55UharWEPOXOre4ISVJbNhWS5Tc41GrQTDZ3Tc6GiWV1AWcb2FYa0lq8iZgMDXHDk5olmbIQGz-aMWHg73caGO9AFd~UJXVMN2rtbCyWaAVknjxYC78dyJwI~gWe8~3WInVrwQFhFBgbnH1MERsPKfh-gzpyGJwwA4DunKj~nj3mksVLmazocUpDAUpXynF1UmK8gDUvo6KuIaAWuZBQAQZKq2sFQdmsG9r0rKFXeuTSsCMNXlneH8z71pCdWw0IGlXgFmIzNDBczC~jAp4skV0A2JKXfRvB0vdwurURGyQhU~RKkIbaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      id: 3,
      number:3,
      post: "CEO design",
      title:"Sahil Gaikwad",
      image:"https://s3-alpha-sig.figma.com/img/684b/7fa8/0e545bff79c0a15255cd7da662badb92?Expires=1644192000&Signature=TUUJKykPmm3kSFIMVTrmRULt3NU02spYU55UharWEPOXOre4ISVJbNhWS5Tc41GrQTDZ3Tc6GiWV1AWcb2FYa0lq8iZgMDXHDk5olmbIQGz-aMWHg73caGO9AFd~UJXVMN2rtbCyWaAVknjxYC78dyJwI~gWe8~3WInVrwQFhFBgbnH1MERsPKfh-gzpyGJwwA4DunKj~nj3mksVLmazocUpDAUpXynF1UmK8gDUvo6KuIaAWuZBQAQZKq2sFQdmsG9r0rKFXeuTSsCMNXlneH8z71pCdWw0IGlXgFmIzNDBczC~jAp4skV0A2JKXfRvB0vdwurURGyQhU~RKkIbaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      id: 4,
      number:4,
      post: "CEO design",
      title:"Sahil Gaikwad",
      image:"https://s3-alpha-sig.figma.com/img/684b/7fa8/0e545bff79c0a15255cd7da662badb92?Expires=1644192000&Signature=TUUJKykPmm3kSFIMVTrmRULt3NU02spYU55UharWEPOXOre4ISVJbNhWS5Tc41GrQTDZ3Tc6GiWV1AWcb2FYa0lq8iZgMDXHDk5olmbIQGz-aMWHg73caGO9AFd~UJXVMN2rtbCyWaAVknjxYC78dyJwI~gWe8~3WInVrwQFhFBgbnH1MERsPKfh-gzpyGJwwA4DunKj~nj3mksVLmazocUpDAUpXynF1UmK8gDUvo6KuIaAWuZBQAQZKq2sFQdmsG9r0rKFXeuTSsCMNXlneH8z71pCdWw0IGlXgFmIzNDBczC~jAp4skV0A2JKXfRvB0vdwurURGyQhU~RKkIbaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      id: 5,
      number:5,
      post: "CEO design",
      title:"Sahil Gaikwad",
      image:"https://s3-alpha-sig.figma.com/img/684b/7fa8/0e545bff79c0a15255cd7da662badb92?Expires=1644192000&Signature=TUUJKykPmm3kSFIMVTrmRULt3NU02spYU55UharWEPOXOre4ISVJbNhWS5Tc41GrQTDZ3Tc6GiWV1AWcb2FYa0lq8iZgMDXHDk5olmbIQGz-aMWHg73caGO9AFd~UJXVMN2rtbCyWaAVknjxYC78dyJwI~gWe8~3WInVrwQFhFBgbnH1MERsPKfh-gzpyGJwwA4DunKj~nj3mksVLmazocUpDAUpXynF1UmK8gDUvo6KuIaAWuZBQAQZKq2sFQdmsG9r0rKFXeuTSsCMNXlneH8z71pCdWw0IGlXgFmIzNDBczC~jAp4skV0A2JKXfRvB0vdwurURGyQhU~RKkIbaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    }
  ];

  export default emojipedia;
