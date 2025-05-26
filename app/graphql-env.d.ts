/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
  Address: {
    kind: "OBJECT";
    name: "Address";
    fields: {
      address: {
        name: "address";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      city: {
        name: "city";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      state: {
        name: "state";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  Boolean: unknown;
  Capsule: {
    kind: "OBJECT";
    name: "Capsule";
    fields: {
      dragon: {
        name: "dragon";
        type: { kind: "OBJECT"; name: "Dragon"; ofType: null };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      landings: {
        name: "landings";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      missions: {
        name: "missions";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "CapsuleMission"; ofType: null };
        };
      };
      original_launch: {
        name: "original_launch";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      reuse_count: {
        name: "reuse_count";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      status: {
        name: "status";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      type: {
        name: "type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  CapsuleMission: {
    kind: "OBJECT";
    name: "CapsuleMission";
    fields: {
      flight: {
        name: "flight";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  CapsulesFind: {
    kind: "INPUT_OBJECT";
    name: "CapsulesFind";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "ID"; ofType: null };
        defaultValue: null;
      },
      {
        name: "landings";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "mission";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "original_launch";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
        defaultValue: null;
      },
      {
        name: "reuse_count";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "status";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Core: {
    kind: "OBJECT";
    name: "Core";
    fields: {
      asds_attempts: {
        name: "asds_attempts";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      asds_landings: {
        name: "asds_landings";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      block: {
        name: "block";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      missions: {
        name: "missions";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "CapsuleMission"; ofType: null };
        };
      };
      original_launch: {
        name: "original_launch";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      reuse_count: {
        name: "reuse_count";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      rtls_attempts: {
        name: "rtls_attempts";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      rtls_landings: {
        name: "rtls_landings";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      status: {
        name: "status";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      water_landing: {
        name: "water_landing";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
    };
  };
  CoreMission: {
    kind: "OBJECT";
    name: "CoreMission";
    fields: {
      flight: {
        name: "flight";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  CoresFind: {
    kind: "INPUT_OBJECT";
    name: "CoresFind";
    isOneOf: false;
    inputFields: [
      {
        name: "asds_attempts";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "asds_landings";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "block";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "missions";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "original_launch";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
        defaultValue: null;
      },
      {
        name: "reuse_count";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "rtls_attempts";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "rtls_landings";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "status";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "water_landing";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Date: unknown;
  Distance: {
    kind: "OBJECT";
    name: "Distance";
    fields: {
      feet: {
        name: "feet";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      meters: {
        name: "meters";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
    };
  };
  Dragon: {
    kind: "OBJECT";
    name: "Dragon";
    fields: {
      active: {
        name: "active";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      crew_capacity: {
        name: "crew_capacity";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      description: {
        name: "description";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      diameter: {
        name: "diameter";
        type: { kind: "OBJECT"; name: "Distance"; ofType: null };
      };
      dry_mass_kg: {
        name: "dry_mass_kg";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      dry_mass_lb: {
        name: "dry_mass_lb";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      first_flight: {
        name: "first_flight";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      heat_shield: {
        name: "heat_shield";
        type: { kind: "OBJECT"; name: "DragonHeatShield"; ofType: null };
      };
      height_w_trunk: {
        name: "height_w_trunk";
        type: { kind: "OBJECT"; name: "Distance"; ofType: null };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      launch_payload_mass: {
        name: "launch_payload_mass";
        type: { kind: "OBJECT"; name: "Mass"; ofType: null };
      };
      launch_payload_vol: {
        name: "launch_payload_vol";
        type: { kind: "OBJECT"; name: "Volume"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      orbit_duration_yr: {
        name: "orbit_duration_yr";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      pressurized_capsule: {
        name: "pressurized_capsule";
        type: {
          kind: "OBJECT";
          name: "DragonPressurizedCapsule";
          ofType: null;
        };
      };
      return_payload_mass: {
        name: "return_payload_mass";
        type: { kind: "OBJECT"; name: "Mass"; ofType: null };
      };
      return_payload_vol: {
        name: "return_payload_vol";
        type: { kind: "OBJECT"; name: "Volume"; ofType: null };
      };
      sidewall_angle_deg: {
        name: "sidewall_angle_deg";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      thrusters: {
        name: "thrusters";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "DragonThrust"; ofType: null };
        };
      };
      trunk: {
        name: "trunk";
        type: { kind: "OBJECT"; name: "DragonTrunk"; ofType: null };
      };
      type: {
        name: "type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      wikipedia: {
        name: "wikipedia";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  DragonHeatShield: {
    kind: "OBJECT";
    name: "DragonHeatShield";
    fields: {
      dev_partner: {
        name: "dev_partner";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      material: {
        name: "material";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      size_meters: {
        name: "size_meters";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      temp_degrees: {
        name: "temp_degrees";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  DragonPressurizedCapsule: {
    kind: "OBJECT";
    name: "DragonPressurizedCapsule";
    fields: {
      payload_volume: {
        name: "payload_volume";
        type: { kind: "OBJECT"; name: "Volume"; ofType: null };
      };
    };
  };
  DragonThrust: {
    kind: "OBJECT";
    name: "DragonThrust";
    fields: {
      amount: {
        name: "amount";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      fuel_1: {
        name: "fuel_1";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      fuel_2: {
        name: "fuel_2";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      pods: {
        name: "pods";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      thrust: {
        name: "thrust";
        type: { kind: "OBJECT"; name: "Force"; ofType: null };
      };
      type: {
        name: "type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  DragonTrunk: {
    kind: "OBJECT";
    name: "DragonTrunk";
    fields: {
      cargo: {
        name: "cargo";
        type: { kind: "OBJECT"; name: "DragonTrunkCargo"; ofType: null };
      };
      trunk_volume: {
        name: "trunk_volume";
        type: { kind: "OBJECT"; name: "Volume"; ofType: null };
      };
    };
  };
  DragonTrunkCargo: {
    kind: "OBJECT";
    name: "DragonTrunkCargo";
    fields: {
      solar_array: {
        name: "solar_array";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      unpressurized_cargo: {
        name: "unpressurized_cargo";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
    };
  };
  Float: unknown;
  Force: {
    kind: "OBJECT";
    name: "Force";
    fields: {
      kN: { name: "kN"; type: { kind: "SCALAR"; name: "Float"; ofType: null } };
      lbf: {
        name: "lbf";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
    };
  };
  HistoriesResult: {
    kind: "OBJECT";
    name: "HistoriesResult";
    fields: {
      data: {
        name: "data";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "History"; ofType: null };
        };
      };
      result: {
        name: "result";
        type: { kind: "OBJECT"; name: "Result"; ofType: null };
      };
    };
  };
  History: {
    kind: "OBJECT";
    name: "History";
    fields: {
      details: {
        name: "details";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      event_date_unix: {
        name: "event_date_unix";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      event_date_utc: {
        name: "event_date_utc";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      flight: {
        name: "flight";
        type: { kind: "OBJECT"; name: "Launch"; ofType: null };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      links: {
        name: "links";
        type: { kind: "OBJECT"; name: "Link"; ofType: null };
      };
      title: {
        name: "title";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  HistoryFind: {
    kind: "INPUT_OBJECT";
    name: "HistoryFind";
    isOneOf: false;
    inputFields: [
      {
        name: "end";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
        defaultValue: null;
      },
      {
        name: "flight_number";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "SCALAR"; name: "ID"; ofType: null };
        defaultValue: null;
      },
      {
        name: "start";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ID: unknown;
  Info: {
    kind: "OBJECT";
    name: "Info";
    fields: {
      ceo: {
        name: "ceo";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      coo: {
        name: "coo";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      cto: {
        name: "cto";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      cto_propulsion: {
        name: "cto_propulsion";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      employees: {
        name: "employees";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      founded: {
        name: "founded";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      founder: {
        name: "founder";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      headquarters: {
        name: "headquarters";
        type: { kind: "OBJECT"; name: "Address"; ofType: null };
      };
      launch_sites: {
        name: "launch_sites";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      links: {
        name: "links";
        type: { kind: "OBJECT"; name: "InfoLinks"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      summary: {
        name: "summary";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      test_sites: {
        name: "test_sites";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      valuation: {
        name: "valuation";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      vehicles: {
        name: "vehicles";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  InfoLinks: {
    kind: "OBJECT";
    name: "InfoLinks";
    fields: {
      elon_twitter: {
        name: "elon_twitter";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      flickr: {
        name: "flickr";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      twitter: {
        name: "twitter";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      website: {
        name: "website";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  Int: unknown;
  Landpad: {
    kind: "OBJECT";
    name: "Landpad";
    fields: {
      attempted_landings: {
        name: "attempted_landings";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      details: {
        name: "details";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      full_name: {
        name: "full_name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      landing_type: {
        name: "landing_type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      location: {
        name: "location";
        type: { kind: "OBJECT"; name: "Location"; ofType: null };
      };
      status: {
        name: "status";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      successful_landings: {
        name: "successful_landings";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      wikipedia: {
        name: "wikipedia";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  Launch: {
    kind: "OBJECT";
    name: "Launch";
    fields: {
      details: {
        name: "details";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      is_tentative: {
        name: "is_tentative";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      launch_date_local: {
        name: "launch_date_local";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      launch_date_unix: {
        name: "launch_date_unix";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      launch_date_utc: {
        name: "launch_date_utc";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      launch_site: {
        name: "launch_site";
        type: { kind: "OBJECT"; name: "LaunchSite"; ofType: null };
      };
      launch_success: {
        name: "launch_success";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      launch_year: {
        name: "launch_year";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      links: {
        name: "links";
        type: { kind: "OBJECT"; name: "LaunchLinks"; ofType: null };
      };
      mission_id: {
        name: "mission_id";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      mission_name: {
        name: "mission_name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      rocket: {
        name: "rocket";
        type: { kind: "OBJECT"; name: "LaunchRocket"; ofType: null };
      };
      ships: {
        name: "ships";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Ship"; ofType: null };
        };
      };
      static_fire_date_unix: {
        name: "static_fire_date_unix";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      static_fire_date_utc: {
        name: "static_fire_date_utc";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      telemetry: {
        name: "telemetry";
        type: { kind: "OBJECT"; name: "LaunchTelemetry"; ofType: null };
      };
      tentative_max_precision: {
        name: "tentative_max_precision";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      upcoming: {
        name: "upcoming";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
    };
  };
  LaunchFind: {
    kind: "INPUT_OBJECT";
    name: "LaunchFind";
    isOneOf: false;
    inputFields: [
      {
        name: "apoapsis_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "block";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "cap_serial";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "capsule_reuse";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "core_flight";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "core_reuse";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "core_serial";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "customer";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "eccentricity";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "end";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
        defaultValue: null;
      },
      {
        name: "epoch";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
        defaultValue: null;
      },
      {
        name: "fairings_recovered";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "fairings_recovery_attempt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "fairings_reuse";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "fairings_reused";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "fairings_ship";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gridfins";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "SCALAR"; name: "ID"; ofType: null };
        defaultValue: null;
      },
      {
        name: "inclination_deg";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "land_success";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "landing_intent";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "landing_type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "landing_vehicle";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "launch_date_local";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
        defaultValue: null;
      },
      {
        name: "launch_date_utc";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
        defaultValue: null;
      },
      {
        name: "launch_success";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "launch_year";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "legs";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lifespan_years";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "longitude";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "manufacturer";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "mean_motion";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "mission_id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "mission_name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "nationality";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "norad_id";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "orbit";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "payload_id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "payload_type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "periapsis_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "period_min";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "raan";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "reference_system";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "regime";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "reused";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "rocket_id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "rocket_name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "rocket_type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "second_stage_block";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "semi_major_axis_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "ship";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "side_core1_reuse";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "side_core2_reuse";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "site_id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "site_name_long";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "site_name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "start";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
        defaultValue: null;
      },
      {
        name: "tbd";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "tentative_max_precision";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "tentative";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  LaunchLinks: {
    kind: "OBJECT";
    name: "LaunchLinks";
    fields: {
      article_link: {
        name: "article_link";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      flickr_images: {
        name: "flickr_images";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      mission_patch: {
        name: "mission_patch";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      mission_patch_small: {
        name: "mission_patch_small";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      presskit: {
        name: "presskit";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      reddit_campaign: {
        name: "reddit_campaign";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      reddit_launch: {
        name: "reddit_launch";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      reddit_media: {
        name: "reddit_media";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      reddit_recovery: {
        name: "reddit_recovery";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      video_link: {
        name: "video_link";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      wikipedia: {
        name: "wikipedia";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  LaunchRocket: {
    kind: "OBJECT";
    name: "LaunchRocket";
    fields: {
      fairings: {
        name: "fairings";
        type: { kind: "OBJECT"; name: "LaunchRocketFairings"; ofType: null };
      };
      first_stage: {
        name: "first_stage";
        type: { kind: "OBJECT"; name: "LaunchRocketFirstStage"; ofType: null };
      };
      rocket: {
        name: "rocket";
        type: { kind: "OBJECT"; name: "Rocket"; ofType: null };
      };
      rocket_name: {
        name: "rocket_name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      rocket_type: {
        name: "rocket_type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      second_stage: {
        name: "second_stage";
        type: { kind: "OBJECT"; name: "LaunchRocketSecondStage"; ofType: null };
      };
    };
  };
  LaunchRocketFairings: {
    kind: "OBJECT";
    name: "LaunchRocketFairings";
    fields: {
      recovered: {
        name: "recovered";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      recovery_attempt: {
        name: "recovery_attempt";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      reused: {
        name: "reused";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      ship: {
        name: "ship";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  LaunchRocketFirstStage: {
    kind: "OBJECT";
    name: "LaunchRocketFirstStage";
    fields: {
      cores: {
        name: "cores";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "OBJECT";
            name: "LaunchRocketFirstStageCore";
            ofType: null;
          };
        };
      };
    };
  };
  LaunchRocketFirstStageCore: {
    kind: "OBJECT";
    name: "LaunchRocketFirstStageCore";
    fields: {
      block: {
        name: "block";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      core: {
        name: "core";
        type: { kind: "OBJECT"; name: "Core"; ofType: null };
      };
      flight: {
        name: "flight";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      gridfins: {
        name: "gridfins";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      land_success: {
        name: "land_success";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      landing_intent: {
        name: "landing_intent";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      landing_type: {
        name: "landing_type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      landing_vehicle: {
        name: "landing_vehicle";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      legs: {
        name: "legs";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      reused: {
        name: "reused";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
    };
  };
  LaunchRocketSecondStage: {
    kind: "OBJECT";
    name: "LaunchRocketSecondStage";
    fields: {
      block: {
        name: "block";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      payloads: {
        name: "payloads";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Payload"; ofType: null };
        };
      };
    };
  };
  LaunchSite: {
    kind: "OBJECT";
    name: "LaunchSite";
    fields: {
      site_id: {
        name: "site_id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      site_name: {
        name: "site_name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      site_name_long: {
        name: "site_name_long";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  LaunchTelemetry: {
    kind: "OBJECT";
    name: "LaunchTelemetry";
    fields: {
      flight_club: {
        name: "flight_club";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  LaunchesPastResult: {
    kind: "OBJECT";
    name: "LaunchesPastResult";
    fields: {
      data: {
        name: "data";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Launch"; ofType: null };
        };
      };
      result: {
        name: "result";
        type: { kind: "OBJECT"; name: "Result"; ofType: null };
      };
    };
  };
  Launchpad: {
    kind: "OBJECT";
    name: "Launchpad";
    fields: {
      attempted_launches: {
        name: "attempted_launches";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      details: {
        name: "details";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      location: {
        name: "location";
        type: { kind: "OBJECT"; name: "Location"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      status: {
        name: "status";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      successful_launches: {
        name: "successful_launches";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      vehicles_launched: {
        name: "vehicles_launched";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Rocket"; ofType: null };
        };
      };
      wikipedia: {
        name: "wikipedia";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  Link: {
    kind: "OBJECT";
    name: "Link";
    fields: {
      article: {
        name: "article";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      reddit: {
        name: "reddit";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      wikipedia: {
        name: "wikipedia";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  Location: {
    kind: "OBJECT";
    name: "Location";
    fields: {
      latitude: {
        name: "latitude";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      longitude: {
        name: "longitude";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      region: {
        name: "region";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  Mass: {
    kind: "OBJECT";
    name: "Mass";
    fields: {
      kg: { name: "kg"; type: { kind: "SCALAR"; name: "Int"; ofType: null } };
      lb: { name: "lb"; type: { kind: "SCALAR"; name: "Int"; ofType: null } };
    };
  };
  Mission: {
    kind: "OBJECT";
    name: "Mission";
    fields: {
      description: {
        name: "description";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      manufacturers: {
        name: "manufacturers";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      payloads: {
        name: "payloads";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Payload"; ofType: null };
        };
      };
      twitter: {
        name: "twitter";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      website: {
        name: "website";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      wikipedia: {
        name: "wikipedia";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  MissionResult: {
    kind: "OBJECT";
    name: "MissionResult";
    fields: {
      data: {
        name: "data";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Mission"; ofType: null };
        };
      };
      result: {
        name: "result";
        type: { kind: "OBJECT"; name: "Result"; ofType: null };
      };
    };
  };
  MissionsFind: {
    kind: "INPUT_OBJECT";
    name: "MissionsFind";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "ID"; ofType: null };
        defaultValue: null;
      },
      {
        name: "manufacturer";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "payload_id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Mutation: {
    kind: "OBJECT";
    name: "Mutation";
    fields: {
      delete_users: {
        name: "delete_users";
        type: { kind: "OBJECT"; name: "users_mutation_response"; ofType: null };
      };
      insert_users: {
        name: "insert_users";
        type: { kind: "OBJECT"; name: "users_mutation_response"; ofType: null };
      };
      update_users: {
        name: "update_users";
        type: { kind: "OBJECT"; name: "users_mutation_response"; ofType: null };
      };
    };
  };
  ObjectID: unknown;
  Payload: {
    kind: "OBJECT";
    name: "Payload";
    fields: {
      customers: {
        name: "customers";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      manufacturer: {
        name: "manufacturer";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      nationality: {
        name: "nationality";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      norad_id: {
        name: "norad_id";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      orbit: {
        name: "orbit";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      orbit_params: {
        name: "orbit_params";
        type: { kind: "OBJECT"; name: "PayloadOrbitParams"; ofType: null };
      };
      payload_mass_kg: {
        name: "payload_mass_kg";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      payload_mass_lbs: {
        name: "payload_mass_lbs";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      payload_type: {
        name: "payload_type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      reused: {
        name: "reused";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
    };
  };
  PayloadOrbitParams: {
    kind: "OBJECT";
    name: "PayloadOrbitParams";
    fields: {
      apoapsis_km: {
        name: "apoapsis_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      arg_of_pericenter: {
        name: "arg_of_pericenter";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      eccentricity: {
        name: "eccentricity";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      epoch: {
        name: "epoch";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      inclination_deg: {
        name: "inclination_deg";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      lifespan_years: {
        name: "lifespan_years";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      longitude: {
        name: "longitude";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      mean_anomaly: {
        name: "mean_anomaly";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      mean_motion: {
        name: "mean_motion";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      periapsis_km: {
        name: "periapsis_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      period_min: {
        name: "period_min";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      raan: {
        name: "raan";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      reference_system: {
        name: "reference_system";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      regime: {
        name: "regime";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      semi_major_axis_km: {
        name: "semi_major_axis_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
    };
  };
  PayloadsFind: {
    kind: "INPUT_OBJECT";
    name: "PayloadsFind";
    isOneOf: false;
    inputFields: [
      {
        name: "apoapsis_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "customer";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "eccentricity";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "epoch";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
        defaultValue: null;
      },
      {
        name: "inclination_deg";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lifespan_years";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "longitude";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "manufacturer";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "mean_motion";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "nationality";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "norad_id";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "orbit";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "payload_id";
        type: { kind: "SCALAR"; name: "ID"; ofType: null };
        defaultValue: null;
      },
      {
        name: "payload_type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "periapsis_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "period_min";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "raan";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "reference_system";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "regime";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "reused";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
      {
        name: "semi_major_axis_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Query: {
    kind: "OBJECT";
    name: "Query";
    fields: {
      _service: {
        name: "_service";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "_Service"; ofType: null };
        };
      };
      capsule: {
        name: "capsule";
        type: { kind: "OBJECT"; name: "Capsule"; ofType: null };
      };
      capsules: {
        name: "capsules";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Capsule"; ofType: null };
        };
      };
      capsulesPast: {
        name: "capsulesPast";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Capsule"; ofType: null };
        };
      };
      capsulesUpcoming: {
        name: "capsulesUpcoming";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Capsule"; ofType: null };
        };
      };
      company: {
        name: "company";
        type: { kind: "OBJECT"; name: "Info"; ofType: null };
      };
      core: {
        name: "core";
        type: { kind: "OBJECT"; name: "Core"; ofType: null };
      };
      cores: {
        name: "cores";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Core"; ofType: null };
        };
      };
      coresPast: {
        name: "coresPast";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Core"; ofType: null };
        };
      };
      coresUpcoming: {
        name: "coresUpcoming";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Core"; ofType: null };
        };
      };
      dragon: {
        name: "dragon";
        type: { kind: "OBJECT"; name: "Dragon"; ofType: null };
      };
      dragons: {
        name: "dragons";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Dragon"; ofType: null };
        };
      };
      histories: {
        name: "histories";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "History"; ofType: null };
        };
      };
      historiesResult: {
        name: "historiesResult";
        type: { kind: "OBJECT"; name: "HistoriesResult"; ofType: null };
      };
      history: {
        name: "history";
        type: { kind: "OBJECT"; name: "History"; ofType: null };
      };
      landpad: {
        name: "landpad";
        type: { kind: "OBJECT"; name: "Landpad"; ofType: null };
      };
      landpads: {
        name: "landpads";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Landpad"; ofType: null };
        };
      };
      launch: {
        name: "launch";
        type: { kind: "OBJECT"; name: "Launch"; ofType: null };
      };
      launchLatest: {
        name: "launchLatest";
        type: { kind: "OBJECT"; name: "Launch"; ofType: null };
      };
      launchNext: {
        name: "launchNext";
        type: { kind: "OBJECT"; name: "Launch"; ofType: null };
      };
      launches: {
        name: "launches";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Launch"; ofType: null };
        };
      };
      launchesPast: {
        name: "launchesPast";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Launch"; ofType: null };
        };
      };
      launchesPastResult: {
        name: "launchesPastResult";
        type: { kind: "OBJECT"; name: "LaunchesPastResult"; ofType: null };
      };
      launchesUpcoming: {
        name: "launchesUpcoming";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Launch"; ofType: null };
        };
      };
      launchpad: {
        name: "launchpad";
        type: { kind: "OBJECT"; name: "Launchpad"; ofType: null };
      };
      launchpads: {
        name: "launchpads";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Launchpad"; ofType: null };
        };
      };
      mission: {
        name: "mission";
        type: { kind: "OBJECT"; name: "Mission"; ofType: null };
      };
      missions: {
        name: "missions";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Mission"; ofType: null };
        };
      };
      missionsResult: {
        name: "missionsResult";
        type: { kind: "OBJECT"; name: "MissionResult"; ofType: null };
      };
      payload: {
        name: "payload";
        type: { kind: "OBJECT"; name: "Payload"; ofType: null };
      };
      payloads: {
        name: "payloads";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Payload"; ofType: null };
        };
      };
      roadster: {
        name: "roadster";
        type: { kind: "OBJECT"; name: "Roadster"; ofType: null };
      };
      rocket: {
        name: "rocket";
        type: { kind: "OBJECT"; name: "Rocket"; ofType: null };
      };
      rockets: {
        name: "rockets";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Rocket"; ofType: null };
        };
      };
      rocketsResult: {
        name: "rocketsResult";
        type: { kind: "OBJECT"; name: "RocketsResult"; ofType: null };
      };
      ship: {
        name: "ship";
        type: { kind: "OBJECT"; name: "Ship"; ofType: null };
      };
      ships: {
        name: "ships";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Ship"; ofType: null };
        };
      };
      shipsResult: {
        name: "shipsResult";
        type: { kind: "OBJECT"; name: "ShipsResult"; ofType: null };
      };
      users: {
        name: "users";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "users"; ofType: null };
            };
          };
        };
      };
      users_aggregate: {
        name: "users_aggregate";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "users_aggregate"; ofType: null };
        };
      };
      users_by_pk: {
        name: "users_by_pk";
        type: { kind: "OBJECT"; name: "users"; ofType: null };
      };
    };
  };
  Result: {
    kind: "OBJECT";
    name: "Result";
    fields: {
      totalCount: {
        name: "totalCount";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  Roadster: {
    kind: "OBJECT";
    name: "Roadster";
    fields: {
      apoapsis_au: {
        name: "apoapsis_au";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      details: {
        name: "details";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      earth_distance_km: {
        name: "earth_distance_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      earth_distance_mi: {
        name: "earth_distance_mi";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      eccentricity: {
        name: "eccentricity";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      epoch_jd: {
        name: "epoch_jd";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      inclination: {
        name: "inclination";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      launch_date_unix: {
        name: "launch_date_unix";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      launch_date_utc: {
        name: "launch_date_utc";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      launch_mass_kg: {
        name: "launch_mass_kg";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      launch_mass_lbs: {
        name: "launch_mass_lbs";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      longitude: {
        name: "longitude";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      mars_distance_km: {
        name: "mars_distance_km";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      mars_distance_mi: {
        name: "mars_distance_mi";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      norad_id: {
        name: "norad_id";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      orbit_type: {
        name: "orbit_type";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      periapsis_arg: {
        name: "periapsis_arg";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      periapsis_au: {
        name: "periapsis_au";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      period_days: {
        name: "period_days";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      semi_major_axis_au: {
        name: "semi_major_axis_au";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      speed_kph: {
        name: "speed_kph";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      speed_mph: {
        name: "speed_mph";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      wikipedia: {
        name: "wikipedia";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  Rocket: {
    kind: "OBJECT";
    name: "Rocket";
    fields: {
      active: {
        name: "active";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      boosters: {
        name: "boosters";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      company: {
        name: "company";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      cost_per_launch: {
        name: "cost_per_launch";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      country: {
        name: "country";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      description: {
        name: "description";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      diameter: {
        name: "diameter";
        type: { kind: "OBJECT"; name: "Distance"; ofType: null };
      };
      engines: {
        name: "engines";
        type: { kind: "OBJECT"; name: "RocketEngines"; ofType: null };
      };
      first_flight: {
        name: "first_flight";
        type: { kind: "SCALAR"; name: "Date"; ofType: null };
      };
      first_stage: {
        name: "first_stage";
        type: { kind: "OBJECT"; name: "RocketFirstStage"; ofType: null };
      };
      height: {
        name: "height";
        type: { kind: "OBJECT"; name: "Distance"; ofType: null };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      landing_legs: {
        name: "landing_legs";
        type: { kind: "OBJECT"; name: "RocketLandingLegs"; ofType: null };
      };
      mass: {
        name: "mass";
        type: { kind: "OBJECT"; name: "Mass"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      payload_weights: {
        name: "payload_weights";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "RocketPayloadWeight"; ofType: null };
        };
      };
      second_stage: {
        name: "second_stage";
        type: { kind: "OBJECT"; name: "RocketSecondStage"; ofType: null };
      };
      stages: {
        name: "stages";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      success_rate_pct: {
        name: "success_rate_pct";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      type: {
        name: "type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      wikipedia: {
        name: "wikipedia";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  RocketEngines: {
    kind: "OBJECT";
    name: "RocketEngines";
    fields: {
      engine_loss_max: {
        name: "engine_loss_max";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      layout: {
        name: "layout";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      number: {
        name: "number";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      propellant_1: {
        name: "propellant_1";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      propellant_2: {
        name: "propellant_2";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      thrust_sea_level: {
        name: "thrust_sea_level";
        type: { kind: "OBJECT"; name: "Force"; ofType: null };
      };
      thrust_to_weight: {
        name: "thrust_to_weight";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      thrust_vacuum: {
        name: "thrust_vacuum";
        type: { kind: "OBJECT"; name: "Force"; ofType: null };
      };
      type: {
        name: "type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      version: {
        name: "version";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  RocketFirstStage: {
    kind: "OBJECT";
    name: "RocketFirstStage";
    fields: {
      burn_time_sec: {
        name: "burn_time_sec";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      engines: {
        name: "engines";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      fuel_amount_tons: {
        name: "fuel_amount_tons";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      reusable: {
        name: "reusable";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      thrust_sea_level: {
        name: "thrust_sea_level";
        type: { kind: "OBJECT"; name: "Force"; ofType: null };
      };
      thrust_vacuum: {
        name: "thrust_vacuum";
        type: { kind: "OBJECT"; name: "Force"; ofType: null };
      };
    };
  };
  RocketLandingLegs: {
    kind: "OBJECT";
    name: "RocketLandingLegs";
    fields: {
      material: {
        name: "material";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      number: {
        name: "number";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  RocketPayloadWeight: {
    kind: "OBJECT";
    name: "RocketPayloadWeight";
    fields: {
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      kg: { name: "kg"; type: { kind: "SCALAR"; name: "Int"; ofType: null } };
      lb: { name: "lb"; type: { kind: "SCALAR"; name: "Int"; ofType: null } };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  RocketSecondStage: {
    kind: "OBJECT";
    name: "RocketSecondStage";
    fields: {
      burn_time_sec: {
        name: "burn_time_sec";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      engines: {
        name: "engines";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      fuel_amount_tons: {
        name: "fuel_amount_tons";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      payloads: {
        name: "payloads";
        type: {
          kind: "OBJECT";
          name: "RocketSecondStagePayloads";
          ofType: null;
        };
      };
      thrust: {
        name: "thrust";
        type: { kind: "OBJECT"; name: "Force"; ofType: null };
      };
    };
  };
  RocketSecondStagePayloadCompositeFairing: {
    kind: "OBJECT";
    name: "RocketSecondStagePayloadCompositeFairing";
    fields: {
      diameter: {
        name: "diameter";
        type: { kind: "OBJECT"; name: "Distance"; ofType: null };
      };
      height: {
        name: "height";
        type: { kind: "OBJECT"; name: "Distance"; ofType: null };
      };
    };
  };
  RocketSecondStagePayloads: {
    kind: "OBJECT";
    name: "RocketSecondStagePayloads";
    fields: {
      composite_fairing: {
        name: "composite_fairing";
        type: {
          kind: "OBJECT";
          name: "RocketSecondStagePayloadCompositeFairing";
          ofType: null;
        };
      };
      option_1: {
        name: "option_1";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  RocketsResult: {
    kind: "OBJECT";
    name: "RocketsResult";
    fields: {
      data: {
        name: "data";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Rocket"; ofType: null };
        };
      };
      result: {
        name: "result";
        type: { kind: "OBJECT"; name: "Result"; ofType: null };
      };
    };
  };
  Ship: {
    kind: "OBJECT";
    name: "Ship";
    fields: {
      abs: { name: "abs"; type: { kind: "SCALAR"; name: "Int"; ofType: null } };
      active: {
        name: "active";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      attempted_landings: {
        name: "attempted_landings";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      class: {
        name: "class";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      course_deg: {
        name: "course_deg";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      home_port: {
        name: "home_port";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
      image: {
        name: "image";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      imo: { name: "imo"; type: { kind: "SCALAR"; name: "Int"; ofType: null } };
      missions: {
        name: "missions";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "ShipMission"; ofType: null };
        };
      };
      mmsi: {
        name: "mmsi";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      model: {
        name: "model";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      position: {
        name: "position";
        type: { kind: "OBJECT"; name: "ShipLocation"; ofType: null };
      };
      roles: {
        name: "roles";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      speed_kn: {
        name: "speed_kn";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      status: {
        name: "status";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      successful_landings: {
        name: "successful_landings";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      type: {
        name: "type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      url: {
        name: "url";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      weight_kg: {
        name: "weight_kg";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      weight_lbs: {
        name: "weight_lbs";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      year_built: {
        name: "year_built";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  ShipLocation: {
    kind: "OBJECT";
    name: "ShipLocation";
    fields: {
      latitude: {
        name: "latitude";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      longitude: {
        name: "longitude";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
    };
  };
  ShipMission: {
    kind: "OBJECT";
    name: "ShipMission";
    fields: {
      flight: {
        name: "flight";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  ShipsFind: {
    kind: "INPUT_OBJECT";
    name: "ShipsFind";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "ID"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "model";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "type";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "role";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "active";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
      {
        name: "imo";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "mmsi";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "abs";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "class";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "weight_lbs";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "weight_kg";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "year_built";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "home_port";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "status";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "speed_kn";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "course_deg";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "latitude";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "longitude";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "successful_landings";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attempted_landings";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "mission";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ShipsResult: {
    kind: "OBJECT";
    name: "ShipsResult";
    fields: {
      data: {
        name: "data";
        type: {
          kind: "LIST";
          name: never;
          ofType: { kind: "OBJECT"; name: "Ship"; ofType: null };
        };
      };
      result: {
        name: "result";
        type: { kind: "OBJECT"; name: "Result"; ofType: null };
      };
    };
  };
  String: unknown;
  String_comparison_exp: {
    kind: "INPUT_OBJECT";
    name: "String_comparison_exp";
    isOneOf: false;
    inputFields: [
      {
        name: "_eq";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_gt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_gte";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_ilike";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "_is_null";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_like";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_lt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_lte";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_neq";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_nilike";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_nin";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "_nlike";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_nsimilar";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_similar";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Subscription: {
    kind: "OBJECT";
    name: "Subscription";
    fields: {
      users: {
        name: "users";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "users"; ofType: null };
            };
          };
        };
      };
      users_aggregate: {
        name: "users_aggregate";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "users_aggregate"; ofType: null };
        };
      };
      users_by_pk: {
        name: "users_by_pk";
        type: { kind: "OBJECT"; name: "users"; ofType: null };
      };
    };
  };
  Volume: {
    kind: "OBJECT";
    name: "Volume";
    fields: {
      cubic_feet: {
        name: "cubic_feet";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      cubic_meters: {
        name: "cubic_meters";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  _Any: unknown;
  _Service: {
    kind: "OBJECT";
    name: "_Service";
    fields: {
      sdl: {
        name: "sdl";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  conflict_action: { name: "conflict_action"; enumValues: "ignore" | "update" };
  federation__FieldSet: unknown;
  link__Import: unknown;
  link__Purpose: {
    name: "link__Purpose";
    enumValues: "SECURITY" | "EXECUTION";
  };
  order_by: {
    name: "order_by";
    enumValues:
      | "asc"
      | "asc_nulls_first"
      | "asc_nulls_last"
      | "desc"
      | "desc_nulls_first"
      | "desc_nulls_last";
  };
  timestamptz: unknown;
  timestamptz_comparison_exp: {
    kind: "INPUT_OBJECT";
    name: "timestamptz_comparison_exp";
    isOneOf: false;
    inputFields: [
      {
        name: "_eq";
        type: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_gt";
        type: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_gte";
        type: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "_is_null";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_lt";
        type: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_lte";
        type: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_neq";
        type: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_nin";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
          };
        };
        defaultValue: null;
      },
    ];
  };
  users: {
    kind: "OBJECT";
    name: "users";
    fields: {
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "uuid"; ofType: null };
        };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      rocket: {
        name: "rocket";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      timestamp: {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
        };
      };
      twitter: {
        name: "twitter";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  users_aggregate: {
    kind: "OBJECT";
    name: "users_aggregate";
    fields: {
      aggregate: {
        name: "aggregate";
        type: { kind: "OBJECT"; name: "users_aggregate_fields"; ofType: null };
      };
      nodes: {
        name: "nodes";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "users"; ofType: null };
            };
          };
        };
      };
    };
  };
  users_aggregate_fields: {
    kind: "OBJECT";
    name: "users_aggregate_fields";
    fields: {
      count: {
        name: "count";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      max: {
        name: "max";
        type: { kind: "OBJECT"; name: "users_max_fields"; ofType: null };
      };
      min: {
        name: "min";
        type: { kind: "OBJECT"; name: "users_min_fields"; ofType: null };
      };
    };
  };
  users_aggregate_order_by: {
    kind: "INPUT_OBJECT";
    name: "users_aggregate_order_by";
    isOneOf: false;
    inputFields: [
      {
        name: "count";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "max";
        type: {
          kind: "INPUT_OBJECT";
          name: "users_max_order_by";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "min";
        type: {
          kind: "INPUT_OBJECT";
          name: "users_min_order_by";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  users_arr_rel_insert_input: {
    kind: "INPUT_OBJECT";
    name: "users_arr_rel_insert_input";
    isOneOf: false;
    inputFields: [
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: {
                kind: "INPUT_OBJECT";
                name: "users_insert_input";
                ofType: null;
              };
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "on_conflict";
        type: { kind: "INPUT_OBJECT"; name: "users_on_conflict"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  users_bool_exp: {
    kind: "INPUT_OBJECT";
    name: "users_bool_exp";
    isOneOf: false;
    inputFields: [
      {
        name: "_and";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "users_bool_exp";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "_not";
        type: { kind: "INPUT_OBJECT"; name: "users_bool_exp"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_or";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "users_bool_exp";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "uuid_comparison_exp";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "String_comparison_exp";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "rocket";
        type: {
          kind: "INPUT_OBJECT";
          name: "String_comparison_exp";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "INPUT_OBJECT";
          name: "timestamptz_comparison_exp";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "twitter";
        type: {
          kind: "INPUT_OBJECT";
          name: "String_comparison_exp";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  users_constraint: {
    name: "users_constraint";
    enumValues:
      | "unique"
      | "or"
      | "primary"
      | "key"
      | "constraint"
      | "users_pkey";
  };
  users_insert_input: {
    kind: "INPUT_OBJECT";
    name: "users_insert_input";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "uuid"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "rocket";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
        defaultValue: null;
      },
      {
        name: "twitter";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  users_max_fields: {
    kind: "OBJECT";
    name: "users_max_fields";
    fields: {
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      rocket: {
        name: "rocket";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
      };
      twitter: {
        name: "twitter";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  users_max_order_by: {
    kind: "INPUT_OBJECT";
    name: "users_max_order_by";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "rocket";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "twitter";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  users_min_fields: {
    kind: "OBJECT";
    name: "users_min_fields";
    fields: {
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      rocket: {
        name: "rocket";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
      };
      twitter: {
        name: "twitter";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  users_min_order_by: {
    kind: "INPUT_OBJECT";
    name: "users_min_order_by";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "rocket";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "twitter";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  users_mutation_response: {
    kind: "OBJECT";
    name: "users_mutation_response";
    fields: {
      affected_rows: {
        name: "affected_rows";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      returning: {
        name: "returning";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "users"; ofType: null };
            };
          };
        };
      };
    };
  };
  users_obj_rel_insert_input: {
    kind: "INPUT_OBJECT";
    name: "users_obj_rel_insert_input";
    isOneOf: false;
    inputFields: [
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "users_insert_input";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "on_conflict";
        type: { kind: "INPUT_OBJECT"; name: "users_on_conflict"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  users_on_conflict: {
    kind: "INPUT_OBJECT";
    name: "users_on_conflict";
    isOneOf: false;
    inputFields: [
      {
        name: "constraint";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "ENUM"; name: "users_constraint"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "update_columns";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: {
                kind: "ENUM";
                name: "users_update_column";
                ofType: null;
              };
            };
          };
        };
        defaultValue: null;
      },
    ];
  };
  users_order_by: {
    kind: "INPUT_OBJECT";
    name: "users_order_by";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "rocket";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
      {
        name: "twitter";
        type: { kind: "ENUM"; name: "order_by"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  users_select_column: {
    name: "users_select_column";
    enumValues: "column" | "name" | "id" | "rocket" | "timestamp" | "twitter";
  };
  users_set_input: {
    kind: "INPUT_OBJECT";
    name: "users_set_input";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "uuid"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "rocket";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "timestamptz"; ofType: null };
        defaultValue: null;
      },
      {
        name: "twitter";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  users_update_column: {
    name: "users_update_column";
    enumValues: "column" | "name" | "id" | "rocket" | "timestamp" | "twitter";
  };
  uuid: unknown;
  uuid_comparison_exp: {
    kind: "INPUT_OBJECT";
    name: "uuid_comparison_exp";
    isOneOf: false;
    inputFields: [
      {
        name: "_eq";
        type: { kind: "SCALAR"; name: "uuid"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_gt";
        type: { kind: "SCALAR"; name: "uuid"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_gte";
        type: { kind: "SCALAR"; name: "uuid"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "uuid"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "_is_null";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_lt";
        type: { kind: "SCALAR"; name: "uuid"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_lte";
        type: { kind: "SCALAR"; name: "uuid"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_neq";
        type: { kind: "SCALAR"; name: "uuid"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_nin";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "uuid"; ofType: null };
          };
        };
        defaultValue: null;
      },
    ];
  };
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: "Query";
  mutation: "Mutation";
  subscription: "Subscription";
  types: introspection_types;
};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
  interface setupSchema {
    introspection: introspection;
  }
}
