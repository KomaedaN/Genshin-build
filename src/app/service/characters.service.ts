import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }
  
  // HOME PAGE 

  homeCharacters = [
    { hydro: [ 'neuvillette', 'tartaglia', 'yelan', 'kokomi', 'nilou', 'mona', 'xingqiu'], lengthCharacters: 7},
    { pyro: ['gaming', 'hu-tao', 'lyney','xiangling', 'bennett', 'yoimiya', 'chevreuse'], lengthCharacters: 7},
    { geo: ['navia', 'arataki-itto', 'zhongli', 'albedo', 'gorou', 'yun-jin'], lengthCharacters: 6},
    { anemo: ['liuyun', 'kazuha', 'xiao', 'venti', 'shikanoin-heizou', 'faruzan'], lengthCharacters: 6},
    { cryo: ['wriothesley', 'ayaka', 'eula', 'shenhe', 'ganyu'], lengthCharacters: 5},
    { electro: ['yae-miko', 'cyno', 'raiden', 'fischl', 'kuki-shinobu'], lengthCharacters: 5},
    { dendro: ['alhaitham', 'baizhu', 'nahida', 'tighnari','kaveh'], lengthCharacters: 5},
  ];

  verifyName(character: string) {
    if (character == 'arataki-itto') {
      return 'Itto';
    }
    else if (character == 'shikanoin-heizou') {
      return 'Heizo';
    }
    else if (character == 'raiden') {
      return 'Shougun';
    }
    else if (character == 'yae-miko') {
      return 'Yae';
    }
    else if (character == 'kuki-shinobu') {
      return 'Shinobu';
    }
    else if (character == 'baizhu') {
      return 'Baizhuer';
    }
    else if (character == 'alhaitham') {
      return 'Alhatham';
    }
    else if (character == 'lyney') {
      return 'Liney';
    }
    else {
      const upperName = character.charAt(0).toUpperCase() + character.slice(1);
      const validName = upperName.replace("-", "");
      return validName;
    }
  }

  // CHARACTERS-TEMPLATE 

  charcterTemplate = [
    {name: "Albedo", vision: "Geo", icon: "Albedo"}, {name: "Alhaitham", vision: "Dendro", icon: "Alhatham"}, 
    {name: "Ayaka", vision: "Cryo", icon: "Ayaka"}, {name: "Ayato", vision: "Hydro", icon: "Ayato"}, {name: "Baizhu", vision: "Dendro", icon: "Baizhuer"}, 
    {name: "Bennett", vision: "Pyro", icon: "Bennett"}, {name: "Charlotte", vision: "Cryo", icon: "Charlotte"}, {name: "Chevreuse", vision: "Pyro", icon: "Chevreuse"}, 
    {name: "Cyno", vision: "Electro", icon: "Cyno"}, {name: "Eula", vision: "Cryo", icon: "Eula"},
    {name: "Faruzan", vision: "Anemo", icon: "Faruzan"}, {name: "Fischl", vision: "Electro", icon: "Fischl"}, {name: "Furina", vision: "Hydro", icon: "Furina"},
    {name: "Gaming", vision: "Pyro", icon: "Gaming"}, {name: "Ganyu", vision: "Cryo", icon: "Ganyu"},
    {name: "Gorou", vision: "Geo", icon: "Gorou"}, {name: "Heizou", vision: "Anemo", icon: "Heizo"},
    {name: "Hu-tao", vision: "Pyro", icon: "Hutao"}, {name: "Itto", vision: "Geo", icon: "Itto"}, {name: "Kazuha", vision: "Anemo", icon: "Kazuha"},
    {name: "Kokomi", vision: "Hydro", icon: "Kokomi"}, {name: "Shinobu", vision: "Electro", icon: "Shinobu"},
    {name: "Lyney", vision: "Pyro", icon: "Liney"},
    {name: "Mona", vision: "Hydro", icon: "Mona"},
    {name: "Nahida", vision: "Dendro", icon: "Nahida"}, {name: "Navia", vision: "Geo", icon: "Navia"},
    {name: "Neuvillette", vision: "Hydro", icon: "Neuvillette"}, {name: "Nilou", vision: "Hydro", icon: "Nilou"},
    {name: "Raiden", vision: "Electro", icon: "Shougun"}, 
    {name: "Shenhe", vision: "Cryo", icon: "Shenhe"}, 
    {name: "Tartaglia", vision: "Hydro", icon: "Tartaglia"}, {name: "Tighnari", vision: "Dendro", icon: "Tighnari"}, {name: "Venti", vision: "Anemo", icon: "Venti"},
    {name: "Wanderer", vision: "Anemo", icon: "Wanderer"}, {name: "Wriothesley", vision: "Cryo", icon: "Wriothesley"}, {name: "Xiangling", vision: "Pyro", icon: "Xiangling"}, 
    {name: "Xianyun", vision: "Anemo", icon: "Liuyun"}, {name: "Xiao", vision: "Anemo", icon: "Xiao"}, {name: "Xingqiu", vision: "Hydro", icon: "Xingqiu"},
    {name: "Yae-miko", vision: "Electro", icon: "Yae"}, {name: "Yelan", vision: "Hydro", icon: "Yelan"}, {name: "Yoimiya", vision: "Pyro", icon: "Yoimiya"},
    {name: "Yun-jin", vision: "Geo", icon: "Yunjin"}, {name: "Zhongli", vision: "Geo", icon: "Zhongli"},
  ]

  // CHARACTERS BUILD 

  allCharactersBuildData = [
    // HYDRO
    {name:'Ayato',weapons:[['Sword_Amenoma','five'],['Sword_Morax','five'],['Sword_Narukami','five'],['Sword_Bloodstained','four']],artifact:'15001',
    mainstats:['ATK%','Hydro DMG','TC/DC'],substats:['TC','DC','ATK%','ER'],skills:['Skill','Burst','AA'],
    ascensions:['Effigy_Water','113028','101202','112044','112045','112046'],talents:['Shougun_Mitakenarukami','113032','104323','104324','104325']},
    {name:'Furina',weapons:[['Sword_Regalis','five'],['Sword_Ayus','five'],['Sword_Boreas','four'],['Sword_Deshret','five']],artifact:'15032',
    mainstats:['ER = HP%','HP% > Hydro DMG','TC/DC'],substats:['TC','DC','ER','HP%'],skills:['Burst','Skill','AA'],
    ascensions:['Narcissusborn_Normal_01','113057','101238','112038','112039','112040'],talents:['Ptahur_Devourer','113056','104341','104342','104343']},
    {name:'Kokomi',weapons:[['Catalyst_Pulpfic','rare'],['Catalyst_Proto','four'],['Catalyst_Fossil','four'],['Catalyst_Bakufu','four']],artifact:'15017',
    mainstats:['ER / HP%','HP%','HP% / Healing'],substats:['ER','HP%','Flat HP','ATK%'],skills:['Skill','Burst','AA'],
    ascensions:['Effigy_Water','113028','101207','112053','112054','112055'],talents:['LaSignora','113026','104320','104321','104322']},
    {name:'Mona',weapons:[['Catalyst_Proto','four'],['Catalyst_Pulpfic','rare'],['Catalyst_Zephyrus','four'],['Catalyst_Troupe','four']],artifact:'15007',
    mainstats:['ER','Hydro DMG','TC / DC'],substats:['ER','TC','DC','ATK%'],skills:['Burst','Skill','AA'],
    ascensions:['Oceanid','113012','100025','112038','112039','112040'],talents:['LupiBoreas','113007','104304','104305','104306']},
    {name:'Neuvillette',weapons:[['Catalyst_Iudex','five'],['Catalyst_Yue','four'],['Catalyst_Morax','five'],['Catalyst_Proto','four']],artifact:'15031',
    mainstats:['HP%','Hydro DMG / HP%','DC / TC / HP%'],substats:['DC','TC','HP%','ER'],skills:['AA','Skill','Burst'],
    ascensions:['SeaHorse_Primo_Electric','113053','101237','112080','112081','112082'],talents:['Apep','113048','104338','104339','104340']},
    {name:'Nilou',weapons:[['Sword_Deshret','five'],['Sword_Mechanic','four'],['Sword_Widsith','five'],['Sword_Pleroma','four']],artifact:'15025',
    mainstats:['HP% / ER','HP%','HP%'],substats:['HP%','ER','Flat HP','EM'],skills:['Skill','Burst','AA'],
    ascensions:['Gargoyle_Fafnir','113038','101214','112059','112060','112061'],talents:['Shougun_Mitakenarukami','113033','104335','104336','104337']},
    {name:'Tartaglia',weapons:[['Bow_Worldbane','five'],['Bow_Kirin','five'],['Bow_Narukami','five'],['Bow_Ayus','five']],artifact:'15029',
    mainstats:['ATK%','Hydro DMG','TC / DC'],substats:['TC','DC','ATK%','EM'],skills:['Skill','Burst','AA'],
    ascensions:['Oceanid','113012','100033','112032','112033','112034'],talents:['Tartaglia','113014','104301','104302','104303']},
    {name:'Xingqiu',weapons:[['Sword_Morax','five'],['Sword_Narukami','five'],['Sword_Amenoma','five'],['Sword_Boreas','four']],artifact:'15020',
    mainstats:['ER / ATK%','Hydro DMG','TC/DC'],substats:['TC/DC','ATK%','ER','EM'],skills:['Burst','Skill','AA'],
    ascensions:['Oceanid','113012','100029','112005','112006','112007'],talents:['LupiBoreas','113006','104316','104317','104318']},
    {name:'Yelan',weapons:[['Bow_Kirin','five'],['Bow_Widsith','five'],['Bow_Zephyrus','four'],['Bow_Troupe','four']],artifact:'15020',
    mainstats:['HP% / ER','Hydro DMG / HP%','TC / DC / HP%'],substats:['ER','TC','DC','HP%'],skills:['Burst','Skill','AA'],
    ascensions:['Nithhoggr_None','113035','100033','112032','112033','112034'],talents:['Dahaka','113019','104310','104311','104312']},

    // PYRO
    {name:'Bennett',weapons:[['Sword_Narukami','five'],['Sword_Falcon','five'],['Sword_Dvalin','five'],['Sword_Widsith','five']],artifact:'15007',
    mainstats:['ER > ATK%','Pyro DMG','TC/DC'],substats:['ER','TC','DC','ATK%'],skills:['Burst','Skill','AA'],
    ascensions:['Regisvine_Fire','113011','100024','112035','112036','112037'],talents:['Dvalin','113003','104304','104305','104306']},
    {name:'Gaming',weapons:[['Claymore_Deshret','five'],['Claymore_Perdue','four'],['Claymore_Itadorimaru','five'],['Claymore_GoldenVerdict','five']],artifact:'15031',
    mainstats:['EM > ATK%','Pyro DMG','TC/DC'],substats:['ER','TC','DC','EM'],skills:['Skill','Burst','AA'],
    ascensions:['HermitCrab_Primo','113051','100033','112002','112003','112004'],talents:['Ptahur_Devourer','113056','104310','104311','104312']},
    {name:'Hutao',weapons:[['Pole_Homa','five'],['Pole_Deshret','five'],['Pole_Shanty','four'],['Pole_Stardust','four']],artifact:'15006',
    mainstats:['HP% / EM','Pyro DMG','TC / DC'],substats:['TC','DC','EM','ATK%'],skills:['AA','Skill','Burst'],
    ascensions:['Drake_Primo_Rock','113016','100029','112038','112039','112040'],talents:['Tartaglia','113014','104313','104314','104315']},
    {name:'Lyney',weapons:[['Bow_Pledge','five'],['Bow_Kirin','five'],['Bow_Narukami','five'],['Bow_Dvalin','five']],artifact:'15031',
    mainstats:['ATK%','Pyro DMG','DC > TC'],substats:['DC','TC','ATK%','ER'],skills:['AA','Burst','Skill'],
    ascensions:['HermitCrab_Primo','113051','101236','112032','112033','112034'],talents:['Apep','113047','104338','104339','104340']},
    {name:'Xiangling',weapons:[['Pole_Deshret','five'],['Pole_Homa','five'],['Pole_Narukami','five'],['Pole_Mori','four']],artifact:'15020',
    mainstats:['ER > ATK% / EM','Pyro DMG','TC / DC'],substats:['ER','TC','DC','ATK%'],skills:['Burst','Skill','AA'],
    ascensions:['Regisvine_Fire','113011','100027','112002','112003','112004'],talents:['Dvalin','113004','104313','104314','104315']},
    {name:'Yoimiya',weapons:[['Bow_Narukami','five'],['Bow_Kirin','five'],['Bow_Worldbane','five'],['Bow_Ayus','five']],artifact:'15019',
    mainstats:['ATK% / EM','Pyro DMG','DC/TC'],substats:['TC/DC','ATK%','EM','ER'],skills:['AA','Burst','Skill'],
    ascensions:['Effigy_Fire','113024','101205','112008','112009','112010'],talents:['Dahaka','113017','104320','104321','104322']},


    // GEO
    {name:'Albedo',weapons:[['Sword_Opus','four'],['Sword_Dawn','rare'],['Sword_Boreas','four'],['Sword_Morax','five']],artifact:'15032',
    mainstats:['DEF%','Geo DMG','TC / DC / DEF%'],substats:['TC','DC','DEF%','ATK%'],skills:['Skill','Burst','AA'],
    ascensions:['Effigy_Rock','113009','100023','112008','112009','112010'],talents:['Tartaglia','113013','104307','104308','104309']},
    {name:'Gorou',weapons:[['Bow_Zephyrus','four'],['Bow_Fossil','four'],['Bow_Widsith','five'],['Bow_Fin','four']],artifact:'15007',
    mainstats:['ER','Geo DMG / DEF%','TC / DEF% / Healing'],substats:['ER','DEF%','TC','Flat Def'],skills:['Skill','Burst','AA'],
    ascensions:['Samurai_Ningyo','113023','101207','112053','112054','112055'],talents:['LaSignora','113025','104326','104327','104328']},
    {name:'Itto',weapons:[['Claymore_Itadorimaru','five'],['Claymore_Kione','four'],['Claymore_Dvalin','five'],['Claymore_Exotic','four']],artifact:'15021',
    mainstats:['DEF%','Geo DMG','TC / DC'],substats:['TC/DC','DEF%','ER','ATK%'],skills:['AA','Burst','Skill'],
    ascensions:['Hound_Planelurker','113030','101201','112002','112003','112004'],talents:['LaSignora','113027','104323','104324','104325']},
    {name:'Navia',weapons:[['Claymore_GoldenVerdict','five'],['Claymore_Kione','four'],['Claymore_Fossil','four'],['Claymore_Deshret','five']],artifact:'15032',
    mainstats:['ATK%','Geo DMG','TC / DC'],substats:['TC','DC','ATK%','ER'],skills:['Skill','Burst','AA'],
    ascensions:['MachinaIustitia_Nutcracker','113050','101240','112002','112003','112004'],talents:['Ptahur_Devourer','113054','104338','104339','104340']},
    {name:'Yun-jin',weapons:[['Pole_Zephyrus','four'],['Pole_Narukami','five'],['Pole_Mori','four'],['Pole_Proto','four']],artifact:'15021',
    mainstats:['DEF% / ER','DEF%','DEF% / TC'],substats:['DEF%','ER','TC','Flat DEF'],skills:['Burst','Skill','AA'],
    ascensions:['Hound_Planelurker','113030','100030','112005','112006','112007'],talents:['LaSignora','113027','104313','104314','104315']},
    {name:'Zhongli',weapons:[['Pole_Zephyrus','four'],['Pole_Homa','five'],['Pole_Morax','five'],['Pole_Dvalin','five']],artifact:'15017',
    mainstats:['HP%','Geo DMG','TC'],substats:['TC','HP%','DC','ER'],skills:['Skill','Burst','AA'],
    ascensions:['Effigy_Rock','113009','100058','112002','112003','112004'],talents:['Tartaglia','113013','104316','104317','104318']},

    // ANEMO
    {name:'Faruzan',weapons:[['Bow_Zephyrus','four'],['Bow_Widsith','five'],['Bow_Fin','four'],['Bow_Fallensun','four']],artifact:'15002',
    mainstats:['ER','Anemo DMG','TC / DC'],substats:['ER','TC','DC','ATK%'],skills:['Burst','Skill','AA'],
    ascensions:['Monolith_Starchild','113039','101220','112065','112066','112067'],talents:['Nada','113041','104329','104330','104331']},
    {name:'Heizou',weapons:[['Catalyst_Narukami','five'],['Catalyst_Dvalin','five'],['Catalyst_Fourwinds','five'],['Catalyst_Fossil','four']],artifact:'15002',
    mainstats:['ATK%','Anemo DMG','DC / TC'],substats:['DC','TC','ATK%','ER'],skills:['AA','Skill','Burst'],
    ascensions:['Nithhoggr_None','113035','101201','112035','112036','112037'],talents:['Shougun_Mitakenarukami','113034','104320','104321','104322']},
    {name:'Kazuha',weapons:[['Sword_Pleroma','four'],['Sword_Widsith','five'],['Sword_Zephyrus','four'],['Sword_Exotic','four']],artifact:'15002',
    mainstats:['EM / ER','EM','EM'],substats:['EM','ER','TC/DC','ATK%'],skills:['Burst','Skill','AA'],
    ascensions:['Samurai_Ningyo','113022','101206','112035','112036','112037'],talents:['Dahaka','113019','104313','104314','104315']},
    {name:'Venti',weapons:[['Bow_Widsith','five'],['Bow_Troupe','four'],['Bow_Fleurfair','four'],['Bow_Zephyrus','four']],artifact:'15002',
    mainstats:['EM','EM','EM'],substats:['ER','EM','TC/DC','ATK%'],skills:['Burst','Skill','AA'],
    ascensions:['Effigy_Wind','113001','100023','112002','112003','112004'],talents:['LupiBoreas','113006','104307','104308','104309']},
    {name:'Wanderer',weapons:[['Catalyst_Alaya','five'],['Catalyst_Fourwinds','five'],['Catalyst_Narukami','five'],['Catalyst_Troupe','four']],artifact:'15027',
    mainstats:['ATK%','Anemo DMG','TC/DC'],substats:['TC/DC','ATK%','EM','ER'],skills:['AA','Skill','Burst'],
    ascensions:['Gargoyle_Fafnir','113038','101213','112044','112045','112046'],talents:['Nada','113043','104335','104336','104337']},
    {name:'Xianyun',weapons:[['Catalyst_MountainGale','five'],['Catalyst_Dvalin','five'],['Catalyst_Jyanome','four'],['Catalyst_Pulpfic','rare']],artifact:'15002',
    mainstats:['ATK% > ER','ATK%','ATK%'],substats:['ATK%','ER','TC','DC'],skills:['Burst','Skill','AA'],
    ascensions:['Hermit','113058','101241','112008','112009','112010'],talents:['Ptahur_Devourer','113055','104316','104317','104318']},
    {name:'Xiao',weapons:[['Pole_Morax','five'],['Pole_Homa','five'],['Pole_Santika','five'],['Pole_Deshret','five']],artifact:'15023',
    mainstats:['ATK%','Anemo DMG','TC / DC'],substats:['ER','TC','DC','ATK%'],skills:['AA','Burst','Skill'],
    ascensions:['Drake_Primo_Rock','113016','100031','112002','112003','112004'],talents:['Tartaglia','113015','104310','104311','104312']},

    // CRYO
    {name:'Ayaka',weapons:[['Sword_Narukami','five'],['Sword_Amenoma','five'],['Sword_Ayus','five'],['Sword_Vorpal','four']],artifact:'14001',
    mainstats:['ATK%','Cryo DMG','DC'],substats:['DC','ATK%','ER','TC'],skills:['Burst','AA','Skill'],
    ascensions:['Apparatus_Perpetual','113023','101202','112044','112045','112046'],talents:['Dahaka','113018','104323','104324','104325']},
    {name:'Charlotte',weapons:[['Catalyst_Dvalin','five'],['Catalyst_Proto','four'],['Catalyst_Zephyrus','four'],['Catalyst_Pulpfic','rare']],artifact:'15017',
    mainstats:['ER','ATK%','ATK%'],substats:['ER','ATK%','TC','DC'],skills:['Burst','Skill','AA'],
    ascensions:['MachinaIustitia_Gravitas','113052','101232','112083','112084','112085'],talents:['Ptahur_Devourer','113054','104341','104342','104343']},
    {name:'Eula',weapons:[['Claymore_Widsith','five'],['Claymore_Kione','four'],['Claymore_Wolfmound','five'],['Claymore_Deshret','five']],artifact:'15018',
    mainstats:['ATK%','Cryo DMG','TC / DC'],substats:['TC','DC','ATK%','ER'],skills:['AA','Burst','Skill'],
    ascensions:['Effigy_Ice','113020','100057','112005','112006','112007'],talents:['Dahaka','113017','104304','104305','104306']},
    {name:'Ganyu',weapons:[['Bow_Pledge','five'],['Bow_Worldbane','five'],['Bow_Kirin','five'],['Bow_Amos','five']],artifact:'14001',
    mainstats:['ATK%','Cryo DMG','TC / DC'],substats:['TC','DC','ER','ATK%'],skills:['AA','Burst','Skill'],
    ascensions:['Regisvine_Ice','113010','100031','112038','112039','112040'],talents:['Tartaglia','113015','104313','104314','104315']},
    {name:'Shenhe',weapons:[['Pole_Santika','five'],['Pole_Narukami','five'],['Pole_Dvalin','five'],['Pole_Zephyrus','four']],artifact:'15007',
    mainstats:['ATK% / ER','ATK%','ATK%'],substats:['ER','ATK%','TC/DC','Flat ATK'],skills:['Skill','Burst','AA'],
    ascensions:['Drake_Deepsea_Ice','113031','100031','112038','112039','112040'],talents:['LaSignora','113026','104310','104311','104312']},
    {name:'Wriothesley',weapons:[['Catalyst_Wheatley','five'],['Catalyst_Alaya','five'],['Catalyst_Iudex','five'],['Catalyst_Narukami','five']],artifact:'15031',
    mainstats:['ATK%','Cryo DMG','DC'],substats:['DC','TC','ATK%','ER'],skills:['AA','Skill','Burst'],
    ascensions:['MachinaIustitia_Gravitas','113052','101239','112083','112084','112085'],talents:['Apep','113047','104344','104345','104346']},
    
    //Electro
    {name:'Cyno',weapons:[['Pole_Deshret','five'],['Pole_Shanty','four'],['Pole_Morax','five'],['Pole_Ruby','rare']],artifact:'15005',
    mainstats:['EM','Electro DMG','TC / DC > EM'],substats:['ER','TC/DC','EM','ATK%'],skills:['Burst','Skill','AA'],
    ascensions:['Regisvine_Electric','113037','101225','112008','112009','112010'],talents:['Shougun_Mitakenarukami','113032','104329','104330','104331']},
    {name:'Fischl',weapons:[['Bow_Worldbane','five'],['Bow_Kirin','five'],['Bow_Ayus','five'],['Bow_Dvalin','five']],artifact:'15032',
    mainstats:['EM / ATK%','Electro DMG','TC / DC'],substats:['TC','DC','ATK%','EM'],skills:['Skill','Burst','AA'],
    ascensions:['Effigy_Electric','113002','100055','112011','112012','112013'],talents:['LupiBoreas','113008','104307','104308','104309']},
    {name:'Raiden',weapons:[['Pole_Narukami','five'],['Pole_Homa','five'],['Pole_Morax','five'],['Pole_Deshret','five']],artifact:'15020',
    mainstats:['ER > ATK%','Electro DMG','TC / DC'],substats:['ER','TC','DC','ATK%'],skills:['Burst','Skill','AA'],
    ascensions:['Raijin','113029','101208','112044','112045','112046'],talents:['LaSignora','113025','104326','104327','104328']},
    {name:'Shinobu',weapons:[['Sword_Widsith','five'],['Sword_Pleroma','four'],['Sword_Exotic','four'],['Sword_Deshret','five']],artifact:'15028',
    mainstats:['EM','EM','EM'],substats:['EM','HP%','Flat HP','ER'],skills:['Skill','Burst','AA'],
    ascensions:['Nithhoggr_None','113035','101205','112053','112054','112055'],talents:['Shougun_Mitakenarukami','113033','104323','104324','104325']},
    {name:'Yae',weapons:[['Catalyst_Narukami','five'],['Catalyst_Iudex','five'],['Catalyst_Fourwinds','five'],['Catalyst_Dvalin','five']],artifact:'15032',
    mainstats:['ER / EM / ATK%','Electro DMG','TC / DC'],substats:['TC/DC','EM','ATK%','ER'],skills:['Skill','Burst','AA'],
    ascensions:['Drake_Deepsea_Ice','113031','101206','112044','112045','112046'],talents:['Shougun_Mitakenarukami','113034','104326','104327','104328']},{name:'Yae',weapons:[['Catalyst_Narukami','five'],['Catalyst_Iudex','five'],['Catalyst_Fourwinds','five'],['Catalyst_Dvalin','five']],artifact:'15032',
    mainstats:['ER / EM / ATK%','Electro DMG','TC / DC'],substats:['TC/DC','EM','ATK%','ER'],skills:['Skill','Burst','AA'],
    ascensions:['Drake_Deepsea_Ice','113031','101206','112044','112045','112046'],talents:['Shougun_Mitakenarukami','113034','104326','104327','104328']},

    // DENDRO
    {name:'Alhaitham',weapons:[['Sword_Ayus','five'],['Sword_Morax','five'],['Sword_Amenoma','five'],['Sword_Boreas','four']],artifact:'15026',
    mainstats:['EM / ATK%','Dendro DMG','TC / DC'],substats:['TC','DC','EM','ER'],skills:['Skill','Burst','AA'],
    ascensions:['Sandworm','113044','101222','112065','112066','112067'],talents:['Nada','113042','104332','104333','104334']},
    {name:'Baizhu',weapons:[['Catalyst_Proto','four'],['Catalyst_Pulpfic','rare'],['Catalyst_Zephyrus','four'],['Catalyst_Morax','five']],artifact:'15025',
    mainstats:['ER / HP%','HP%','HP%'],substats:['ER','HP%','Flat HP','TC'],skills:['Burst','Skill','AA'],
    ascensions:['Invoker_Archdeacon','113045','100034','104316','104317','104318'],talents:['Apep','113046','112059','112060','112061']},
    {name:'Nahida',weapons:[['Catalyst_Ayus','five'],['Catalyst_Pleroma','four'],['Catalyst_Narukami','five'],['Catalyst_Fossil','four']],artifact:'15025',
    mainstats:['EM','EM / Dendro DMG','EM / TC / DC'],substats:['EM','TC/DC','ER','ATK%'],skills:['Skill','Burst','AA'],
    ascensions:['Effigy_Grass','113040','101217','112059','112060','112061'],talents:['Nada','113041','104332','104333','104334']},
    {name:'Tighnari',weapons:[['Bow_Ayus','five'],['Bow_Kirin','five'],['Bow_Pledge','five'],['Bow_Dvalin','five']],artifact:'15026',
    mainstats:['EM / ATK%','Dendro DMG','TC / DC'],substats:['TC','DC','EM','ATK%'],skills:['AA','Burst','Skill'],
    ascensions:['Fungus_Raptor','113036','101215','112059','112060','112061'],talents:['Nada','113034','104329','104330','104331']},
  ]
}
