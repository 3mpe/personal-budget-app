# Finansal Yönetim Uygulaması

Bu proje, kullanıcıların gelir ve giderlerini takip edebilmesini, bütçe yönetimi yapabilmesini ve tasarruf önerileri alabilmesini sağlayan bir web uygulamasıdır. Aşağıda, uygulamanın nasıl çalıştığını ve hangi işlevleri sunduğunu açıklayan detaylı bilgi bulunmaktadır.

## 1. Uygulamanın Genel Özeti

Uygulama, kullanıcının gelir ve gider bilgilerini kaydetmesine, bir bütçe limiti belirlemesine ve harcamalarına göre tasarruf önerileri almasına olanak sağlar. Kullanıcılar, belirledikleri bütçe limitine ne kadar yaklaştıklarını, hangi kategorilerde fazla harcama yaptıklarını ve nasıl tasarruf edebileceklerini görürler.

### Temel Özellikler
- **Gelir ve Gider Takibi**: Kullanıcılar, gelir ve giderlerini ekler ve bu bilgileri kaydeder.
- **Bütçe Limiti**: Kullanıcılar bir bütçe limiti belirler. Bu limit, kullanıcıya harcamalarını kontrol etmesi için bir rehber sağlar.
- **Harcama Kategorileri**: Gelir ve giderler, belirli kategorilere ayrılabilir (örneğin, yiyecek, ulaşım, eğlence vb.).
- **Tasarruf Önerileri**: Kullanıcılar, bütçelerini aşmamaları için sistem tarafından yönlendirilen tasarruf önerilerini alır.

---

## 2. Kullanıcı Arayüzü

Uygulamanın kullanıcı arayüzü, temel olarak şu öğeleri içerir:

### **Bütçe Limiti Ayarları**

Kullanıcılar, uygulama başlangıcında veya ihtiyaç duyduklarında bütçe limitlerini belirleyebilirler.

### **Gelir ve Gider Formları**

Gelir ve gider eklemek için kullanılan formlar, kullanıcıların ilgili bilgileri girmesine olanak tanır.

### **Harcama Kategorileri**

Her harcama, bir kategoriye ait olmalıdır. Bu, kullanıcının harcamalarını daha kolay takip etmesini sağlar.

### **Tasarruf Önerileri**

Kullanıcıların harcamalarına dayalı olarak uygulama, onlara tasarruf önerileri sunar. Bu öneriler, harcama limitine yakınlaşma veya fazla harcama yapma durumlarına göre şekillenir.

---

## 3. Uygulama Fonksiyonları

### **Gelir ve Gider Kaydetme**

Gelir ve gider bilgileri, kullanıcının form aracılığıyla girdiği verilerle kaydedilir. Bu bilgiler, `localStorage` kullanılarak kalıcı hale getirilir.

### **Bütçe Limiti Kontrolü**

Bütçe limiti, kullanıcı tarafından belirlenen değeri geçtikçe, sistem tasarruf önerileri sunar. Eğer kullanıcı bütçesinin %80'ine veya daha fazlasına yaklaşırsa, uyarılar gösterilir.

### **Tasarruf Önerileri**

Uygulama, harcamalar üzerinden tasarruf önerileri sunar. Bu öneriler, harcama kategorileri ve bütçe limitine göre özelleştirilir.

---

## 4. Depolama ve Veri Yönetimi

Veriler, kullanıcının cihazında `localStorage` kullanılarak depolanır. Bu sayede, uygulama her açıldığında veriler korunur ve kullanıcının girdiği bilgiler kaybolmaz.

### **Veri Kaydetme ve Alma**

Verilerin kaydedilmesi ve alınması için `Storage` yardımcı fonksiyonları kullanılır.

---
