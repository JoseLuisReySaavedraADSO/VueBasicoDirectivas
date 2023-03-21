export default{
    data() {
        return {
            selecion: null,
          imagen:{
            mario: 'img/mario.png',
            luigi: 'img/luigi.png',
            toad: 'img/toad.png',
            peach: 'img/peach.png',
          }
        }
    },
    methods:{
        cambio(e){
            document.querySelector("#img").src = this.selecion;
        }
    }
}