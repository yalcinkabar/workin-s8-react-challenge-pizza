describe("Pizza App", () => {

    it("Anasayfa açılıyor", () => {
        cy.visit("http://localhost:5173");
        cy.contains("KOD ACIKTIRIR");
    });

    it("Sipariş sayfasına gider", () => {
        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        cy.contains("Position Absolute Acı Pizza");
    });

    it("Form boşken sipariş ver butonu disabled", () => {
        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        cy.contains("Sipariş Ver").should("be.disabled");
    });

    it("Formda gerekli koşullar sağlanırsa buton aktif olur.", () => {
        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        // isim
        cy.get('input[placeholder="İsminizi girin"]').type("Yalçın");

        // boyut
        cy.get('input[value="M"]').check({ force: true });

        // hamur
        cy.get("select").select(1);

        // malzemeler (4 tane)
        cy.contains("Pepperoni").click();
        cy.contains("Sosis").click();
        cy.contains("Mısır").click();
        cy.contains("Jalapeno").click();

        cy.contains("Sipariş Ver").should("not.be.disabled");
    });

    it("Sipariş tamamlanır ve success sayfası açılır", () => {
        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        cy.get('input[placeholder="İsminizi girin"]').type("Yalçın");
        cy.get('input[value="M"]').check({ force: true });
        cy.get("select").select(1);
        cy.contains("Pepperoni").click();
        cy.contains("Sosis").click();
        cy.contains("Mısır").click();
        cy.contains("Jalapeno").click();

        cy.get("button:visible").contains("Sipariş Ver").click();

        cy.contains("SİPARİŞ ALINDI");
    });

    it("Minimum 4 malzeme seçmeden sipariş verilemez", () => {
        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        cy.get('input[placeholder="İsminizi girin"]').type("Ahmet");

        cy.get('input[value="M"]').check({ force: true });

        cy.get("select").select(1);

        // sadece 2 malzeme
        cy.contains("Pepperoni").click();
        cy.contains("Sosis").click();

        cy.get("button:visible")
            .contains("Sipariş Ver")
            .should("be.disabled");
    });

    it("En fazla 10 malzeme seçilebilir", () => {
        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        cy.get('input[placeholder="İsminizi girin"]').type("Yalçın");

        cy.get('input[value="M"]').check({ force: true });

        cy.get("select").select(1);

        // 11 tane seçmeye çalış
        cy.get('input[type="checkbox"]').each(($el, index) => {
            if (index < 11) {
                cy.wrap($el).check({ force: true });
            }
        });

        // 👇 DOĞRU ASSERT
        cy.get('input[type="checkbox"]:checked')
            .should("have.length", 10);
    });

    it("Adet artırma çalışır", () => {
        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        cy.contains("+").click();

        cy.contains("2");
    });

    it("Seçimlere göre toplam fiyat doğru hesaplanır", () => {
        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        // isim
        cy.get('input[placeholder="İsminizi girin"]').type("Yalçın");

        // boyut
        cy.get('input[value="M"]').check({ force: true });

        // hamur
        cy.get("select").select(1);

        // 4 malzeme seç (her biri 5₺)
        cy.contains("Pepperoni").click();
        cy.contains("Sosis").click();
        cy.contains("Mısır").click();
        cy.contains("Jalapeno").click();

        // 👉 Beklenen:
        // base: 85
        // toppings: 4 * 5 = 20
        // total: 105

        cy.contains("Seçimler").parent().should("contain", "20");
        cy.contains("Toplam").parent().should("contain", "105");
    });

    it("Sipariş bilgileri success sayfasında görünür", () => {
        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        cy.get('input[placeholder="İsminizi girin"]').type("Yalçın");

        cy.get('input[value="M"]').check({ force: true });

        cy.get("select").select(1);

        cy.contains("Pepperoni").click();
        cy.contains("Sosis").click();
        cy.contains("Mısır").click();
        cy.contains("Jalapeno").click();

        cy.get("button:visible")
            .contains("Sipariş Ver")
            .click();

        cy.contains("Yalçın");
        cy.contains("M");
    });

    it("Mobilde sipariş özeti butonların aşağısında görünür", () => {
        cy.viewport(375, 667);

        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        cy.contains("Sipariş Özeti")
            .should("be.visible");
    });

    it("Mobilde tüm koşullar sağlanıp buton aktif olur", () => {
        cy.viewport(375, 667);

        cy.visit("http://localhost:5173");

        cy.contains("ACIKTIM").click();

        cy.get('input[placeholder="İsminizi girin"]').type("Yalçın");

        cy.get('input[value="M"]').check({ force: true });

        cy.get("select").select(1);

        cy.contains("Pepperoni").click();
        cy.contains("Sosis").click();
        cy.contains("Mısır").click();
        cy.contains("Jalapeno").click();

        cy.contains("Sipariş Ver")
            .should("not.be.disabled");
    });
});