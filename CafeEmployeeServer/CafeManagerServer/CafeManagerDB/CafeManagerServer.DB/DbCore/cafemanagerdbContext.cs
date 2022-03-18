using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace CafeManagerServer.DB.DbCore
{
    public partial class cafemanagerdbContext : DbContext
    {
        protected readonly IConfiguration Configuration;


        public cafemanagerdbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public cafemanagerdbContext(DbContextOptions<cafemanagerdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cafe> Cafe { get; set; }
        public virtual DbSet<Cafeemployee> Cafeemployee { get; set; }
        public virtual DbSet<Employee> Employee { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                var connection = Configuration.GetSection("Data").GetConnectionString("Connection");
                optionsBuilder.UseMySQL(connection);
               
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cafe>(entity =>
            {
                entity.ToTable("cafe");

                entity.HasIndex(e => e.CafeId)
                    .HasName("CafeId")
                    .IsUnique();

                entity.Property(e => e.CafeId).HasColumnType("binary(16)");

                entity.Property(e => e.CafeDescription)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.CafeName)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Logo).HasColumnType("blob");
            });

            modelBuilder.Entity<Cafeemployee>(entity =>
            {
                entity.HasKey(e => new { e.CafeId, e.EmployeeId })
                    .HasName("PRIMARY");

                entity.ToTable("cafeemployee");

                entity.HasIndex(e => e.EmployeeId)
                    .HasName("EmployeeId");

                entity.Property(e => e.CafeId).HasColumnType("binary(16)");

                entity.Property(e => e.EmployeeId).HasMaxLength(100);

                entity.Property(e => e.StartDate).HasColumnType("date");

                entity.HasOne(d => d.Cafe)
                    .WithMany(p => p.Cafeemployee)
                    .HasForeignKey(d => d.CafeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cafeemployee_ibfk_1");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.Cafeemployee)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cafeemployee_ibfk_2");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("employee");

                entity.HasIndex(e => e.EmployeeId)
                    .HasName("EmployeeId")
                    .IsUnique();

                entity.Property(e => e.EmployeeId).HasMaxLength(100);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.EmployeeName)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
