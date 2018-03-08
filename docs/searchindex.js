Search.setIndex({docnames:["_modules/authentication","_modules/boilerplate_function","_modules/extract","_modules/helpers","_modules/load","_modules/modules","_modules/transform","_modules/transform.enrichment","_modules/transform.geospatial","_modules/transform.preprocessing","extract/download_from_data_amsterdam_api","extract/download_from_data_amsterdam_catalog","extract/download_from_objectstore","extract/download_from_wfs","index","introduction","license","load/load_file_to_objectstore","load/load_wfs_into_postgres","load/load_xls_into_postgres","modules","transform/enrichment/add_knmi_data","transform/geospatial/api_clean_BAG_address_NED","transform/geospatial/api_get_area_codes_from_latlon","transform/geospatial/api_get_nearest_address_from_coordinate","transform/geospatial/divide_bbox_amsterdam_in_quadrants","transform/geospatial/postgres_add_areas_from_coordinates","transform/geospatial/rd_to_wgs84"],envversion:53,filenames:["_modules/authentication.rst","_modules/boilerplate_function.rst","_modules/extract.rst","_modules/helpers.rst","_modules/load.rst","_modules/modules.rst","_modules/transform.rst","_modules/transform.enrichment.rst","_modules/transform.geospatial.rst","_modules/transform.preprocessing.rst","extract/download_from_data_amsterdam_api.rst","extract/download_from_data_amsterdam_catalog.rst","extract/download_from_objectstore.rst","extract/download_from_wfs.rst","index.rst","introduction.rst","license.rst","load/load_file_to_objectstore.rst","load/load_wfs_into_postgres.rst","load/load_xls_into_postgres.rst","modules.rst","transform/enrichment/add_knmi_data.rst","transform/geospatial/api_clean_BAG_address_NED.rst","transform/geospatial/api_get_area_codes_from_latlon.rst","transform/geospatial/api_get_nearest_address_from_coordinate.rst","transform/geospatial/divide_bbox_amsterdam_in_quadrants.rst","transform/geospatial/postgres_add_areas_from_coordinates.rst","transform/geospatial/rd_to_wgs84.rst"],objects:{"":{authentication:[0,0,0,"-"],boilerplate_function:[1,0,0,"-"],extract:[2,0,0,"-"],helpers:[3,0,0,"-"],load:[4,0,0,"-"],transform:[6,0,0,"-"]},"authentication.config":{config:[0,1,1,""]},"authentication.getaccesstoken":{GetAccessToken:[0,2,1,""]},"authentication.getaccesstoken.GetAccessToken":{getAccessToken:[0,3,1,""]},"extract.csv_dataframe":{is_valid_file:[2,1,1,""],main:[2,1,1,""],parser:[2,1,1,""],read_crow_file:[2,1,1,""],read_mora_file:[2,1,1,""],strip_cols:[2,1,1,""],valid_date:[2,1,1,""]},"extract.download_bbga_by_variable__area_year":{main:[2,1,1,""],statisticsByAreaByYear:[2,1,1,""],writeStatisticsTable2PGTable:[2,1,1,""]},"extract.download_from_data_amsterdam_api":{conversionListCvalues:[10,1,1,""],getJsonData:[10,1,1,""],get_data:[10,1,1,""],main:[2,1,1,""],parser:[10,1,1,""],reformatData:[10,1,1,""]},"extract.download_from_data_amsterdam_catalog":{download_all_files:[11,1,1,""],download_file:[2,1,1,""],download_metadata:[11,1,1,""],get_catalog_package_id:[11,1,1,""],main:[2,1,1,""],parser:[11,1,1,""]},"extract.download_from_objectstore":{download_container:[12,1,1,""],download_containers:[12,1,1,""],get_full_container_list:[12,1,1,""],main:[2,1,1,""],parser:[12,1,1,""]},"extract.download_from_wfs":{get_layer_from_wfs:[13,1,1,""],get_layers_from_wfs:[13,1,1,""],get_multiple_geojson_from_wfs:[13,1,1,""],main:[2,1,1,""],parser:[13,1,1,""]},"helpers.connections":{execute_sql:[3,1,1,""],get_config:[3,1,1,""],objectstore_connection:[3,1,1,""],postgres_engine_pandas:[3,1,1,""],psycopg_connection_string:[3,1,1,""]},"helpers.files":{create_dir_if_not_exists:[3,1,1,""],save_file:[3,1,1,""],unzip:[3,1,1,""]},"helpers.logging":{logger:[3,1,1,""]},"helpers.normalize":{clean_dict:[3,1,1,""],flatten_json:[3,1,1,""]},"load.load_file_to_objectstore":{check_existence_object:[17,1,1,""],get_object:[17,1,1,""],main:[4,1,1,""],parser:[17,1,1,""],put_object:[17,1,1,""],upload_file:[17,1,1,""]},"load.load_wfs_to_postgres":{NonZeroReturnCode:[18,4,1,""],load_layers:[18,1,1,""],main:[4,1,1,""],parser:[18,1,1,""],run_command_sync:[18,1,1,""],scrub:[18,1,1,""],wfs2psql:[18,1,1,""]},"load.load_xls_to_postgres":{load_xls:[19,1,1,""],main:[4,1,1,""],parser:[4,1,1,""]},"transform.enrichment":{add_knmi_data:[21,0,0,"-"],knmi_metadata:[7,0,0,"-"]},"transform.enrichment.add_knmi_data":{chunk_splitter:[21,1,1,""],get_day_data_dataframe:[21,1,1,""],get_day_data_raw:[21,1,1,""],main:[7,1,1,""],parse_dataframe:[7,1,1,""],parse_day_data:[21,1,1,""],parser:[21,1,1,""]},"transform.enrichment.knmi_metadata":{Station:[7,2,1,""]},"transform.enrichment.knmi_metadata.Station":{altitude:[7,5,1,""],latitude:[7,5,1,""],longitude:[7,5,1,""],name:[7,5,1,""],number:[7,5,1,""]},"transform.geospatial":{api_clean_BAG_address_NED:[8,0,0,"-"],api_get_areacodes_from_latlon:[8,0,0,"-"],api_get_nearest_address_from_latlon:[8,0,0,"-"],csv_get_centroid_of_street:[8,0,0,"-"],divide_bbox_amsterdam_in_quadrants:[25,0,0,"-"],postgres_add_areas_from_coordinates:[8,0,0,"-"],rd_to_wgs84:[8,0,0,"-"]},"transform.geospatial.api_clean_BAG_address_NED":{main:[8,1,1,""],parser:[8,1,1,""]},"transform.geospatial.api_get_areacodes_from_latlon":{getAreaCodes:[8,1,1,""],getJson:[8,1,1,""]},"transform.geospatial.api_get_nearest_address_from_latlon":{get_address_near_point:[8,1,1,""],get_openbareruimte:[8,1,1,""]},"transform.geospatial.csv_get_centroid_of_street":{get_centroid_street:[8,1,1,""],main:[8,1,1,""],parser:[8,1,1,""]},"transform.geospatial.divide_bbox_amsterdam_in_quadrants":{calculation:[25,1,1,""]},"transform.geospatial.postgres_add_areas_from_coordinates":{executeScriptsFromFile:[8,1,1,""],main:[8,1,1,""],parser:[8,1,1,""]},"transform.geospatial.rd_to_wgs84":{rd_to_wgs84:[8,1,1,""]},"transform.preprocessing":{data_selection:[9,0,0,"-"],enrichment:[9,0,0,"-"],ml_helperfunctions:[9,0,0,"-"]},"transform.preprocessing.data_selection":{DateRange:[9,2,1,""],remove_nan_targets:[9,1,1,""],select_and_report:[9,1,1,""]},"transform.preprocessing.data_selection.DateRange":{from_dataframe:[9,6,1,""],length:[9,3,1,""],select:[9,3,1,""]},"transform.preprocessing.enrichment":{enrich_datetime:[9,1,1,""]},"transform.preprocessing.ml_helperfunctions":{accuracy_score:[9,1,1,""],calculate_covariance_matrix:[9,1,1,""],calculate_std_dev:[9,1,1,""],calculate_variance:[9,1,1,""],euclidean_distance:[9,1,1,""],mean_squared_error:[9,1,1,""]},authentication:{config:[0,0,0,"-"],getaccesstoken:[0,0,0,"-"]},boilerplate_function:{main:[1,1,1,""],parser:[1,1,1,""],your_first_function:[1,1,1,""],your_second_function:[1,1,1,""]},extract:{csv_dataframe:[2,0,0,"-"],download_bbga_by_variable__area_year:[2,0,0,"-"],download_from_data_amsterdam_api:[10,0,0,"-"],download_from_data_amsterdam_catalog:[11,0,0,"-"],download_from_objectstore:[12,0,0,"-"],download_from_wfs:[13,0,0,"-"]},helpers:{connections:[3,0,0,"-"],files:[3,0,0,"-"],logging:[3,0,0,"-"],normalize:[3,0,0,"-"]},load:{load_file_to_objectstore:[17,0,0,"-"],load_wfs_to_postgres:[18,0,0,"-"],load_xls_to_postgres:[19,0,0,"-"]},transform:{enrichment:[7,0,0,"-"],geospatial:[8,0,0,"-"],preprocessing:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:exception","5":"py:attribute","6":"py:staticmethod"},terms:{"292678dee13c":[2,11],"2f3":[2,11],"2faction":[2,11],"2fapi":[2,11],"2fpackage_show":[2,11],"3d5d84c216":[2,11],"3fid":[2,11],"8b69":[2,11],"boolean":9,"break":15,"case":[2,8,10,16,25],"class":[0,7,9],"default":[7,13,21],"export":[3,12,13,17,18],"final":16,"float":9,"function":[1,2,3,4,7,8,15,20],"import":[0,4,16,17],"int":[7,21],"new":15,"potenti\u00ebl":[7,21],"return":[1,2,3,4,7,8,9,10,12,13,17,18,21,22,23,24,25],"static":9,"true":[3,4,18],For:[11,15,16],Such:16,The:[2,3,4,13,15,16,17],Use:[8,12,17,20,22,27],Used:[4,18],Uses:[4,17],WFS:[2,4,8,13,18,25],aanvalsplan_schoon:[2,4,12,17],abil:16,abl:[15,16],about:15,abov:16,absenc:16,absolut:16,acc:[2,10],access:0,accesstoken:[0,2,10],account:15,accur:16,accuraci:9,accuracy_scor:9,achtergrond:[7,21],action:[2,11,16],activ:15,ad83:[2,11],add:[1,2,3,4,7,8,9,10,11,12,13,14,16,17,18,21,22],add_knmi_data:20,added:[2,10],adding:3,addition:16,addr:[8,24],address:[8,22,23,24],affect:16,affero:16,after:16,afvaldata:2,against:16,agre:16,agreement:16,alia:7,all:[2,3,7,10,11,12,13,15,16,21],alleg:16,allow:16,allow_fail:[4,18],alon:16,also:[9,15,16],alter:16,altitud:7,amsterdam:[2,8,10,11,13,15,18,21,22,23,25],amsterdam_hotspot:22,an_example_pypi_project:[1,8,22],anaconda:15,analist:15,analyt:15,ani:16,another_fold:[2,13],anotherdir:3,anyon:16,api:[0,2,8,10,11,18,20,22,23],api_clean_bag_address_n:20,app:[2,4,11,12,17],apparatu:16,appli:[9,15,16],applic:[4,17],appropri:3,area:[2,8,23],areatyp:2,arg:[1,2,3,4,7,8,9,10,11,12,13,17,18,21,23,24,25],argname1:1,argname2:1,argpars:15,argument:[1,2,4,7,8,15],assert:16,assum:16,attach:16,attempt:16,attr2:3,attr:3,auth:[2,10,18,19,20],authent:[3,5,14,26],author:[10,16],authurl:3,automat:[15,16],avail:[16,21],awesom:15,awesome_modul:15,b826:[2,11],back:16,bag:[8,23],bar:3,base:[0,3,4,7,8,9,17,23,24],bash:15,basi:16,basic:3,bbga:2,bbox:[8,25],becom:16,been:16,befor:[12,17],begin:[7,21],behalf:16,believ:16,benefici:16,better:[8,27],between:9,bewolk:[7,21],bi_afv:2,bin:15,block:15,boilerplate_funct:[5,15],bool:[7,21],bring:16,brought:16,build:15,busi:16,buurt:[2,13],buurtcombinati:[2,13],buurten:[8,23],c1f04a62:[2,11],c60:[2,10],calcul:[8,9,25],calculate_covariance_matrix:9,calculate_std_dev:9,calculate_vari:9,can:[2,7,9,15,16,21],catalog:[2,11,20],catalogu:[2,11],categori:21,caus:16,ce2647a076ef:[2,11],centroid:8,chang:[2,15],charact:16,charg:16,check:[1,3,4,17],check_existence_object:[4,17],choic:[13,16],choos:[13,16],chunk:[7,21],chunk_splitt:[7,21],circumst:16,citi:[8,15,25],citizen:2,city_nam:8,ckan:[2,11],clean:[2,22],clean_dict:3,clear:16,clone:15,cloud:15,cmd:[4,18],code:[3,4,8,14,17,18,23],coenhaven:21,column:[2,9],com:[3,4,15,17],combin:[15,16],come:16,comma:[2,12,13],command:[2,4,7,10,11,12,13,15,17,18,21,22],commandlin:[1,2,4,8,10,11,12,15,17,18,22],commerci:16,common:[16,20],commonli:20,compar:9,complet:16,complianc:16,compliant:16,compos:15,comput:16,concern:16,concole_script:15,conenct:2,config:[3,5,12,15,17,18,19,20,26],config_full_path:3,config_nam:[3,12,17],config_path:[4,12,17,18,19],configur:3,conflict:16,conn:3,connect:[2,4,5,12,15,17,18],consequenti:16,consist:[2,10],consol:[3,4,18],constitut:16,constru:16,contain:[2,4,9,10,12,16,17,20],container_path:[4,17],content:[5,16,17],content_typ:[4,17],contract:16,contribut:14,control:[15,16],convei:16,convers:[2,10],conversionlistcvalu:[2,10],convert:[2,10,15],coordin:[2,8,13,24],copi:[15,16],copyright:16,core:9,correct:[8,15,16],cost:16,count:[2,10],counter:16,court:16,covari:9,creat:[2,3,4,9,10,11,15,16,17],create_dir_if_not_exist:3,creation:16,credenti:[2,3,4,15,18,20],cross:16,crow:[2,4,12,17],csv:[3,4,7,8,10,17,21,22],csv_datafram:5,current:[3,7,8,10,21,23],cursor:3,cvalu:[2,10],d_bbga_cd:2,dai:[9,16],daili:[7,21],dam:8,damag:16,dashboard:15,data:[2,3,4,7,8,9,10,11,12,13,14,17,18,19,20,21,23],data_output:3,databas:[2,15],datacentrum:[7,21],datadir:[4,19],datafram:[2,7,9,21],datapunt:[2,10],dataservic:[4,17],dataset:[2,9,11,20],date:[2,3,7,9,21],datecol:2,daterang:9,datetim:[7,9,21],datum:2,db_config:18,db_config_nam:[3,4,19,26],dbconfig:19,dbname:[3,4,18],ddvec:[7,21],deal:[15,16],death:16,declaratori:16,defect:16,defend:16,defin:[2,4,12,13,16,17],delet:16,delta:9,depart:2,deploi:15,describ:[15,16],descript:[1,2,4,7,8,9,10,11,12,13,15,16,17,18,21,22],desir:[2,11,16],detail:16,dev:[3,15,18,19,26],developp:15,deviat:9,df_std:2,dict:[2,3,10],dictionairi:[2,10],dictionari:[2,3,8,10,24],dictonari:[2,11],differ:[8,15,16,27],dir:[2,3,10,11],direct:16,directli:16,directori:[3,11,16,19],disclaim:[7,21],displai:16,distanc:9,distinguish:16,distributor:16,divid:[8,25],divide_bbox_amsterdam_in_quadr:20,doc:[1,2,4,8,10,12,15,17,22],docker:[2,3,4,12,15,17,18,19,26],doctrin:16,document:[15,16],doe:[1,2,3,8,11,16,26,27],download:[2,4,8,10,11,12,17,27],download_all_fil:[2,11],download_bbga_by_variable__area_year:5,download_contain:[2,12],download_directori:[2,11],download_fil:2,download_from_data_amsterdam_api:[5,14,20],download_from_data_amsterdam_catalog:[5,14,20],download_from_objectstor:[5,14,20],download_from_wf:[5,14,20],download_metadata:[2,11],drafter:16,drop:9,druk:[7,21],dte:[2,11],dtf:11,each:[2,4,10,12,16,18],earlier:16,edit:15,een:[7,21],either:16,els:[2,13],employe:0,empti:[2,7,13,21],end:[7,9,16,21],endpoint:[2,10],enforc:16,engin:3,enrich:[14,21],enrich_datetim:9,entir:[3,16],entiti:16,env:[17,18],environ:[12,15,17,18],epsg:[2,4,13,18],equival:16,error:[2,3,4,8,9,10,17,18,23],essenti:16,etc:[2,3,8,9,11,24],etl:20,euclidean_dist:9,ev24:[7,21],even:16,event:16,everi:16,exampl:[1,2,3,4,8,10,11,12,13,15,17,18,19,20,21,22,26,27],except:[4,16,18],exclud:[2,13,16],exclus:16,excut:[4,18],execut:3,execute_sql:3,executescriptsfromfil:[8,26],exercis:16,exist:[2,3,4,11,15,17],explan:[7,21],explicitli:16,exploit:16,express:16,extens:15,extent:16,extract:[5,10,11,12,13,14,15],f5343c794b10:3,factual:16,fail:16,failur:16,fals:[3,4,7,18,21],featur:9,fee:16,fetch:[7,21],fhx:[7,21],field:[3,7,15],fifti:16,file:[1,2,4,5,7,8,11,12,13,15,16,17,18,19,20,21],file_loc:2,filenam:[3,4,8,10,17,22,26],filename_as_fold:3,filename_path:[4,17],fill:[2,11,20],find:[3,4,17],first:[2,8,10,16,24],fit:16,flatten:[2,3,10],flatten_json:3,flattend:[2,10],folder:[2,3,11,12,13,15],follow:[15,16,21],foo:3,fork:15,form:15,format:[2,4,7,13,18,21],forum:[8,27],found:[2,4,8,15,17,24],foundat:16,fraction:9,frame:[2,9],framework:18,free:16,from:[0,1,2,3,4,7,8,9,10,11,12,13,15,16,17,18,20,21,22,23,27],from_datafram:9,full:[2,3,4,7,10,11,12,13,17,21,26],full_config_path:26,full_path:3,further:16,gdal:18,gebieden:[2,8,13,18,23],gebiedsberichtwerken:2,gebiedsgerichtwerken:[2,13],gener:[2,7,9,10,12,15,16,20,21],geo:[8,25],geocach:[8,27],geojson:[2,3,13],geosearch:[8,23],geospati:[14,22,23,24,25,26,27],get:[0,2,3,7,8,10,11,12,13,14,21,23,24],get_address_near_point:[8,24],get_catalog_package_id:[2,11],get_centroid_street:8,get_config:3,get_data:[2,10],get_day_data_datafram:[7,21],get_day_data_raw:[7,21],get_full_container_list:[2,12],get_layer_from_wf:[2,13],get_layers_from_wf:[2,13],get_multiple_geojson_from_wf:[2,13],get_object:[4,17],get_openbareruimt:[8,24],getaccesstoken:[2,5,10],getareacod:[8,23],getjson:[8,23],getjsondata:[2,10],gettoken:0,git:15,github:[15,20],gitignor:20,give:[8,23],given:[3,16],global:[7,21],gml:[2,13],gnu:16,goodwil:16,govern:16,great:1,guid:15,guidelin:15,has:16,have:[9,16],header:0,held:16,helper:[2,4,5,10,12,14,15,17],here:[2,15],herebi:16,hereof:16,hide:[4,18],high:15,histor:9,host:[3,4,15,18],hour:[2,10],housenumb:[8,24],how:[4,9,14,16,17],howev:16,html:[1,8,22],http:[1,2,3,4,7,8,10,11,13,15,16,17,21,22,23,27],huisnumm:[8,24],ideal:[2,10],ignor:20,imag:15,impli:16,imposs:16,inaccuraci:16,incident:16,incl:[2,12],includ:[2,3,4,7,11,13,15,16,17,21,26],incur:16,indemn:16,indemnifi:16,index:[8,14,27],indirect:16,indirectli:16,individu:16,inform:[8,15,16,23],informat:2,infring:16,ini:[3,12,15,17,18,19,20,26],initi:[3,16],injuri:16,input:9,inseason:[7,21],insert:[3,11],instal:15,instead:3,intellectu:16,intend:16,intern:0,iopub_data_rate_limit:15,is_valid_fil:2,issu:15,item:[0,2,8,10,23],its:16,json:[2,3,4,8,10,11,13,17,23],json_object:3,judgment:16,judici:16,jupyt:15,jurisdict:16,kei:3,kenni:[7,21],key_nam:3,kind:16,knmi:[7,21],known:16,kwarg:[2,4,12,18],label:[2,10],languag:16,lat:[8,23,24],later:[15,16],latitud:7,law:16,layer:[2,4,13,18],layer_nam:[2,4,13,18],least:2,leav:[2,13],legal:16,legend:[7,21],length:[2,9,10],lesser:16,liabl:16,librari:18,licens:14,like:[8,16,23],limit:[2,8,10,25],line:[2,4,7,10,11,13,15,18,21,22],list:[2,3,4,7,8,9,10,11,13,18,21,25],load:[5,14,15,17,18,19],load_file_to_objectstor:[5,14,20],load_lay:[4,18],load_wfs_to_postgr:[5,14,20],load_xl:[4,19],load_xls_to_postgr:[5,14,20],local:[2,11,12,15,18,19],locat:[2,3,8,10,12,13,15,16,19,24],log:[0,5,9],logger:3,login:[2,3,4,15,18],logo:16,lon:[8,23,24],longitud:7,look:16,loop:[2,12],loss:16,lost:16,luchtvochtigheid:[7,21],made:16,mai:16,main:[1,2,4,7,8,10,11,15,20],maintain:16,make:[2,15,16],malfunct:16,manag:16,mani:[9,15],manner:16,map:[2,13,15],mark:16,materi:16,matrix:[2,9,10],matter:16,max:[8,9,27],max_drop_r:9,maximum:16,mean:[9,16],mean_squared_error:9,merchant:16,messag:[2,3,4,8,9,10,18,23],metadata:[2,10,11],method:[8,16,27],mime:[4,17],miss:15,mode:15,modul:[5,14,15],month:[7,21],mora:[2,12],more:[15,16],moreov:16,most:[8,20,25],mpb:11,mpl:16,mpv:11,mpz:11,mstr:[7,21],much:15,multipl:[2,4,8,10,12,13,19,25],must:16,my_project_fold:10,name:[2,3,4,7,8,10,12,13,15,16,17,18,19,24,26],nan:9,nearest:[8,23,24],necessari:16,need:[11,15],neerslag:[7,21],neglig:16,nest:3,nln:[4,18],non:16,none:[3,4,7,9,17,21],nonzeroreturncod:[4,18],normal:5,note:16,notebook:14,notebookapp:15,noth:16,notifi:16,notwithstand:16,number:[2,3,7,8,10,11,13,16,21,25],number_of_box:[8,25],oauth2:10,object:[0,2,3,4,7,8,9,12,17,21,24],objectsctor:3,objectstor:[2,3,4,12,17,20],objectstore_connect:[2,3,4,12,17],objectstore_password:[12,17],oblig:16,observ:21,obtain:16,offer:16,offset:[8,27],often:20,ogr2ogr:[4,18],one:[2,10,16,20],ongo:16,onli:[8,15,16,21,23],open:[4,17],openbar:[8,24],openbareruimt:[8,24],oper:[9,20],ophalen:[7,21],option:[1,2,4,7,8,9,16,18,21,22],order:16,ordinari:16,org:[1,8,16,22],origin:16,origion:8,osx:15,other:[2,10,15,16],otherwis:16,our:15,output:[2,11,13,15],output_fold:[2,3,4,10,11,12,13,17],outputfil:10,outputfold:10,outputformat:[2,13],outstand:16,overwrit:[4,18],own:[2,15,16],owner:[2,11],ownership:16,packag:[5,11,14,15,17,20],package_show:[2,11],page:[2,10,11,14,15],panda:[3,7,9,19,21],paramet:[2,3,9],pars:[2,7,8,10,21,23],parse_datafram:7,parse_day_data:[7,21],parser:[1,2,4,7,8,10,11,12,13,17,18,21,22],part:[7,16,21],parti:16,particular:16,password:[3,4,12,17,18,20],path:[1,2,3,4,11,12,13,17,18,26],path_to_config:[3,12,17],path_to_fold:[2,13],pdok:22,percent:16,perform:16,permit:16,person:16,pg_str:[3,4,8,18,26],pgn:[7,21],pgx:[7,21],php:[8,27],piec:[7,21],pip:15,pipelin:15,place:16,pleas:15,popul:9,port:[3,4,15,18],portion:16,possibl:[1,8,13,16,22],postcod:[8,24],postgr:[3,4,8,15,18,19,27],postgres_add_areas_from_coordin:20,postgres_engine_panda:3,postgresql:[4,18,19,20],power:16,prcp:[7,21],pre:[7,21],prefer:16,prefix:[2,4,12,17],preprocess:20,prequisit:14,present:[4,17],prevent:[16,20],princip:16,print:[2,3,13],print_config_var:3,prior:16,process:[16,20],profit:16,program:[4,18],prohibit:16,project:[15,20],projectdir:[13,19],prompt:15,proper:[2,10,15,18,20],properti:16,prove:16,provid:[3,16],provis:16,provision:16,psycopg2:[3,4,18],psycopg:3,psycopg_connection_str:3,publish:16,purpos:16,put:[11,16],put_object:[4,17],pypi:15,python3:15,python:[3,4,15,17,21],pythonhost:[1,8,22],quadrant:[8,25],qualiti:[15,16],queri:[3,8,25],question:[4,17],quick:[8,27],quot:3,radiu:[8,23,24],rang:9,raw:[7,20,21],rd_to_wgs84:20,read:[3,7,15,21],read_crow_fil:2,read_mora_fil:2,reason:[16,21],receipt:16,receiv:16,recipi:16,record:[2,10],rectangl:[8,25],refer:16,reform:16,reformat:[2,10],reformatdata:[2,10],refresh:[2,11],regener:15,registr:[2,10],reinstat:16,rel:18,relat:16,relev:[7,16,21],remedi:16,remov:[3,9,16],remove_nan_target:9,renam:[16,20],repair:16,report:9,repositori:15,repres:[9,16],reproduc:[15,16],reproject:[8,27],request:0,requir:[3,15,16],resel:16,resid:[8,24],resourc:[2,11],respect:16,respons:[2,7,10,11,21],restrict:16,result:[2,4,8,11,12,16,17,23,24,27],retriev:[2,10,11],retrievd:[4,17],reus:15,right:16,risk:16,root:[2,3,12],row:[2,9,10],royalti:16,rst:15,ruimt:[8,24],run:[1,2,4,7,8,9,10,11,12,13,15,17,18,21,22],run_command_sync:[4,18],runnabl:15,sale:16,save:[2,3,4,10,13,17],save_fil:3,schedul:9,schema:2,schiphol:21,script:[3,7,12,15,17,21],scrub:[4,18],search:[8,23],section:[0,16],see:[1,7,8,16,21,22],select:9,select_and_report:9,sell:16,semant:15,separ:[2,7,12,13,16,19,21],seri:9,server:15,servic:[2,4,10,13,16,18],session:[2,3,12],set:[2,3,10,13,15,18,19],setup:[2,3,12,15],setuptool:15,shall:16,shapezip:[2,13],share:16,should:16,show:1,showtop:[8,27],simpl:2,simplic:21,singl:[2,13],skill:16,skip:15,some:[1,15,16],sourc:[3,15],space:[2,13],special:16,specif:[8,16,23],specifi:[2,3,4,7,11,12,13,17,21],speed:[2,10],sphinx:[1,2,4,7,8,10,11,12,13,15,17,18,21,22],sql:3,sqlalchemi:3,squar:9,srs:[2,13],st_transform:[8,27],stackoverflow:[4,17],stadsdeel:[2,8,13,23],standard:[2,9,13,20],start:[7,9,14,21],station:[7,21],statisticsbyareabyyear:2,statutori:16,step:14,steward:16,stoppag:16,store:[1,2,4,11,12,17,20],str:[4,7,9,17,21],strale:[7,21],street:[8,24],street_column:8,string:[3,4,7,18,21],strip_col:2,structur:15,stuff:1,style:[1,8,22],sub:[2,12],subfold:[2,3,4,12,17],subject:16,subkei:3,sublicens:16,submodul:5,subprocess:[4,18],substanc:16,subsubfold:[2,12],subsubkei:3,successfulli:[4,17],suffici:16,suffix:3,sunr:[7,21],support:16,sure:2,surviv:16,system:[2,13,15],t10n:[7,21],t_sr:[4,18],tabl:[2,3,19],tablenam:2,tag:[2,12],target:[2,9],tellu:[2,10],tellus_metadata:[2,10],tellusdata:10,temp:[7,21],temperatuur:[7,21],termin:15,test:[2,4,10,11,15,17,22],testdata:22,text:[3,4,16,17],than:16,thei:16,them:[2,3,13,15,20],theori:16,thereof:16,thi:[2,3,9,10,11,12,15,16,17,20],third:16,those:[15,16],through:[2,12],time:[2,9,16],timedelta:9,titl:[2,4,13,18],to_sql:[3,19],todai:[7,21],todo:3,token:[0,2,10],top:3,topografi:11,tort:16,total:2,towardsdatasci:3,trademark:16,transfer:16,transform:[5,14,15,21,22,23,24,25,26,27],tripl:3,tupl:7,two:9,txt:[1,2,3,4,13,17],type:[0,2,3,4,10,15,17,18],under:16,understand:16,unenforc:16,uniqu:[2,11],unless:16,unmodifi:16,unstruct:15,until:16,unzip:[2,3,11],upload:[4,17,18,19,20],upload_fil:[4,17],url:[0,2,4,8,10,11,13,18,23],url_api:[2,10],url_wf:[2,13],usag:[0,3,10,11,12,13,15,17,18,19,21,22,26],use:[3,4,8,14,16,17,18,20,25],used:[9,15,16,20],user:[3,4,16,18,20],uses:3,using:[0,2,3,4,10,12,15,16,17,18,19],util:2,valid_d:2,validli:16,valu:[2,3,8,9,10,23],vanuit:[7,21],variabelen:2,variabl:[3,7,21],variablenam:2,varianc:9,vector:9,venv:15,verblijfsobject:[8,23],verdamp:[7,21],version:15,vicl:[7,21],virtual:[15,18],virtualenv:15,vvn:[7,21],vvx:[7,21],want:[2,8,10,15,16,21,27],weather:[7,21],week:9,well:[8,25],were:9,wfs2psql:[4,18],wfs:[2,13],wfs_get_geojson:13,when:[4,15,17],where:[2,8,11,12,16,17,20,24],whether:16,which:[2,9,10,15,16],who:16,wide:16,wind:[7,21],window:15,wip:[8,26],within:[4,16,18],without:[2,13,16],work:[3,8,23,25,26],workflow:15,world:16,would:16,wrapper:[3,21],write:[2,4,12,17,26],writestatisticstable2pgt:2,written:[2,12],www:[7,21],xls:[2,19],xlsx:[2,4,19],y_pred:9,y_true:9,year:[2,9],yet:[2,3,8,11,26],yield:[7,21],yml:15,you:[2,8,10,15,21,27],your:[2,3,12,15,17],your_file_nam:[1,4,17],your_first_funct:1,your_second_funct:1,zeeniveau:[7,21],zicht:[7,21],zip:3,zipfil:3,zonneschijnduur:[7,21],zsh:15},titles:["authentication package","boilerplate_function module","extract package","helpers package","load package","src","transform package","transform.enrichment package","transform.geospatial package","transform.preprocessing package","download_from_data_amsterdam_api","download_from_data_amsterdam_catalog","download_from_objectstore","download_from_wfs","Datapunt Processing","Data-processing","Mozilla Public License Version 2.0","load_file_to_objectstore","load_wfs_to_postgres","load_xls_to_postgres","Modules","add_knmi_data","api_clean_BAG_address_NED","api_get_areacodes_from_latlon","api_get_nearest_address_from_latlon","divide_bbox_amsterdam_in_quadrants","postgres_add_areas_from_coordinates","rd_to_wgs84"],titleterms:{"function":[10,11,12,13,14,17,18,19,21,22,23,24,25,26,27],"new":16,"public":16,Use:16,With:16,add:15,add_knmi_data:[7,21],add_public_ev:7,addit:16,api_clean_bag_address_n:[8,22],api_get_areacodes_from_latlon:[8,23],api_get_nearest_address_from_latlon:[8,24],api_get_nearest_address_from_point:[],applic:16,argument:[10,11,12,13,17,18,19,21,22,26],authent:[0,20],boilerplate_funct:1,claim:16,code:[15,16],compli:16,condit:16,config:0,connect:3,content:[0,2,3,4,6,7,8,9],contribut:[15,16],contributor:16,cover:16,csv_datafram:2,csv_get_centroid_of_street:8,data:15,data_select:9,datapunt:14,date:16,definit:16,disclaim:16,distribut:16,divide_bbox_amsterdam_in_quadr:[8,25],download_bbga_by_variable__area_year:2,download_from_data_amsterdam_api:[2,10],download_from_data_amsterdam_catalog:[2,11],download_from_objectstor:[2,12],download_from_wf:[2,13],due:16,effect:16,enrich:[7,9,20],execut:16,exhibit:16,extract:[2,20],fair:16,file:3,form:16,geospati:[8,20],get:15,getaccesstoken:0,grant:16,helper:[3,20],how:15,inabl:16,incompat:16,knmi_metadata:7,larger:16,liabil:16,licens:16,limit:16,litig:16,load:[4,20],load_file_to_objectstor:[4,17],load_wfs_to_postgr:[4,18],load_xls_to_postgr:[4,19],log:3,miscellan:16,ml_helperfunct:9,ml_preprocess:9,modif:16,modifi:16,modul:[0,1,2,3,4,6,7,8,9,20],mozilla:16,normal:3,notebook:15,notic:16,packag:[0,2,3,4,6,7,8,9],patent:16,posit:[10,11,12,13,17,18,19,21,22,26],postgres_add_areas_from_coordin:[8,26],preprocess:9,prequisit:15,process:[14,15],rd_to_wgs84:[8,27],regul:16,represent:16,respons:16,scope:16,search:14,secondari:16,softwar:16,sourc:16,src:5,start:15,statut:16,step:15,submodul:[0,2,3,4,7,8,9],subsequ:16,term:16,termin:16,transform:[6,7,8,9,20],use:15,util:9,version:16,warranti:16,work:16,you:16,your:16}})