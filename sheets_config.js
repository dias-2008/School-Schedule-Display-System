// configuration file for Google Sheet links
// Add your sheets here to have them appear on all devices (PC, TV, etc.)
// Format: { url: '...', name: '...', shift: 1 or 2 }

// ============================================
// СМЕНА 1 (SHIFT 1)
// ============================================
const SHIFT_1 = [
    // Class 5
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSz57X3_30M1RVdRPSPR26enuAg1LdCIa3Bn1Tt-2fKH6K3kvGxm2L1wiv4u2aCKAGSmYh_Cw60HzyY/pubhtml', name: '5B', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTCT0p0GZ_f4IFXFAaShVs0uMKg1R6_pEcU0HxGFuhrxuTiD2_akjeoI4pNeFJSFxJN-SkoicNnACpP/pubhtml', name: '5M', shift: 1 },

    // Class 8
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTPIC8uKXeniJ6yc6vJVixB9RWRHhnIND4lQcFhnHCT_UuQRIKZCM1pmpXqdl6fhlRjnONYahVIUBtt/pubhtml', name: '8A', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQN95IjjUd8orx23y8rq6-vK49CfiToYKpPbLJu7HcVMvisAXibetdndzXbXzAYTfMHMMVo9D_hcB-n/pubhtml', name: '8B', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRl_LsThcawRl7wHvhY72dCF5V7H0iQkJW5OpyqqJ_IxNMdC4yYgUl3Cb_QJzqNLSBbrcyJLVyHwpmN/pubhtml', name: '8F', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS2p9wfevGX6jtBH7doWZ4jS2DeMelWJPBLMZGUt0DIQqsc49e0KS2fz8jeiGtv0Rg5Ae-ggSu0kyQV/pubhtml', name: '8D', shift: 1 },

    // Class 9
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_ey-C69geEbXSzSHyO-v6pOWypAOCh7m_I6ZMCHtd6FqP60Lze7br7IgIx-6RJccbLoCltGY4_dsR/pubhtml', name: '9B', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTsIRAZbAJEU1YmFcppQdcPqEFsdf_BTi2jwmC3NZKW7O8__kRGdKRf6Ep6mUy3xQlMo2knH3k01fis/pubhtml', name: '9C', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQfNeDmt6UmknuqIKTiLaL41Ns8mtmuoWDoKJuDRrY-gQJeggbgw-ewA9b_1xOMdXCBWW4wwIh1OPIz/pubhtml', name: '9E', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSJRjXMSXb_9OIovV7FoSMWSmA3bc-SjVE4PfnZublFuYm-nF5jo1DpOB3i4zhLsxFHf0Iph2WUf1I-/pubhtml', name: '9F', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTntphmcbzRqEzWCrowckJzNFiKmKo-e-_lgh4_p7nggNLGa-o575Dqhn8tZ_Cn6ZI3bm5uQAm5Mxu8/pubhtml', name: '9D', shift: 1 },

    // Class 10
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vROXGzV9o-j14FZlTWuI3bAhWUeUXoeF5PX6OjOLRLS3NOk87weta4OhWqdMr6ByFr4zUPGzMKOpRmB/pubhtml', name: '10B', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWZnizdzqlHeUYx7Cs6OkrK9lpCGB8afsMAsejo9LXMAfqKjnYOfJrfGcFqogu9EvntZOcSa45bWxF/pubhtml', name: '10C', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRwnXhn1sOIIADlN6h-uzTgisjZFGB6jZxefPhNlZnr57nNTAWUtmt8fsSmwyrkgR-uMfhYU6aU_slt/pubhtml', name: '10E', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTR0kaliqHYzTQmE5-xYClWXslnB7GscyUNmJyMvafUiap0e94-oiIZHkaQx9TOP_yU23NSKDxZGKNN/pubhtml', name: '10D', shift: 1 },

    // Class 11
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQs30qIynH3yuvQzasvL-ugJSPvWZxGuZeWoJW5ZLykwUK_WoF5u3JPTNUbyGtTd6nOLNgqJZTjdQWi/pubhtml', name: '11A', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDDofrcgU7rsjhW6GBDxd4RJKiGmrwiYvo88jRZu1sW9XapduZrD_wYxXnRxUvlRvhSof4O6PcEb9A/pubhtml', name: '11I', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5QtpGE_SfrJ49NZb58YvKCpJTmBnPqw9hge3VGKtyFnpyrzCwN1QbkkrIHeAlIRsEoLhb6jsMKmKf/pubhtml', name: '11B', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRxVm_kQ4mG2SKTiAtyyXIS5z3RGIDdbm15McVpn2GIbzfwrVtjAPzeUmnBHv-OwbYaxkTbvo51Sh4I/pubhtml', name: '11C', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTq1K4iK5OZ5CQVN5B_0y8YV2D54pvKXIQQxct-m6YpcvDYclmjOlShIJcVYwM5VVqlyllMOrU4AmgY/pubhtml', name: '11D', shift: 1 },
]

// ============================================
// СМЕНА 2 (SHIFT 2)
// ============================================
const SHIFT_2 = [
    // Class 7 (All 7th grades belong to Shift 2)
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSdm4I_7B0Nrp-PGcCAgUttwayZ9-8P08PvkXSvVAV56isWqUiD3mqTYfmQ5DlOobKOaDmnhlpL5u25/pubhtml', name: '5E', shift: 2 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQPv3Q7kY7wps3RGufUsBNVqE_6-Ey9Ww6kK7ssIBgBEkBEvFP3w0iuSC3NVKZSjq93zBWV7gS63FOV/pubhtml', name: '7C', shift: 2 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRwPo4FSgbCRKeCNMZ7KmtcbTXAbMTUFpdbIXcCWsbucka3e7Z9yKxNN9VhrDSFTZbjbSWATh1UdeWe/pubhtml', name: '7D', shift: 2 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSXBPG65BvghF1RZm4fmoNuVOSy-lOo7oef5YOETXMGI7nagUWILHLE_UM7LpEoMHv6VECocg8oB3ma/pubhtml', name: '7E', shift: 2 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRZSnva8DC-nt0IjwCku6E_lM6uOGy_VlM_J72RBgpTy00zsbLJpxhyUfm7tJtRQyKeQA1NQ4ssIYGw/pubhtml', name: '7F', shift: 2 },

    // Add other 5th and 6th grade classes here (except 5B and 5M)
    // Example:
    // { url: '', name: '5A', shift: 2 },
    // { url: '', name: '6A', shift: 2 },
];

// ============================================
// COMBINED (for backward compatibility)
// ============================================
const GLOBAL_SHEETS = [...SHIFT_1, ...SHIFT_2];